import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  Recipe,
  RecipesResponse,
  RecipeSearchParams,
  CreateRecipeRequest,
  UpdateRecipeRequest,
} from '@/types/api.types';

export const recipesApi = createApi({
  reducerPath: 'recipesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  tagTypes: ['Recipe'],
  endpoints: (builder) => ({
    // Get all recipes with pagination, search, and sorting
    getRecipes: builder.query<RecipesResponse, RecipeSearchParams>({
      query: ({ q, limit = 9, skip = 0, sortBy = 'name', order = 'asc' }) => {
        const params = new URLSearchParams({
          limit: limit.toString(),
          skip: skip.toString(),
          sortBy,
          order,
        });

        if (q) {
          return `/recipes/search?q=${q}&${params.toString()}`;
        }

        return `/recipes?${params.toString()}`;
      },
      providesTags: (result: RecipesResponse | undefined) =>
        result
          ? [
              ...result.recipes.map(({ id }) => ({ type: 'Recipe' as const, id })),
              { type: 'Recipe', id: 'LIST' },
            ]
          : [{ type: 'Recipe', id: 'LIST' }],
    }),

    // Get single recipe by ID
    getRecipeById: builder.query<Recipe, number>({
      query: (id) => `/recipes/${id}`,
      providesTags: (_result: Recipe | undefined, _error: unknown, id: number) => [{ type: 'Recipe', id }],
    }),

    // Create new recipe
    createRecipe: builder.mutation<Recipe, CreateRecipeRequest>({
      query: (body) => ({
        url: '/recipes/add',
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      invalidatesTags: [{ type: 'Recipe', id: 'LIST' }],
    }),

    // Update existing recipe
    updateRecipe: builder.mutation<Recipe, UpdateRecipeRequest>({
      query: ({ id, ...body }) => ({
        url: `/recipes/${id}`,
        method: 'PUT',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      invalidatesTags: (_result: Recipe | undefined, _error: unknown, { id }: UpdateRecipeRequest) => [
        { type: 'Recipe', id },
        { type: 'Recipe', id: 'LIST' },
      ],
    }),

    // Delete recipe
    deleteRecipe: builder.mutation<{ isDeleted: boolean; id: number }, number>({
      query: (id) => ({
        url: `/recipes/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_result: { isDeleted: boolean; id: number } | undefined, _error: unknown, id: number) => [
        { type: 'Recipe', id },
        { type: 'Recipe', id: 'LIST' },
      ],
    }),
  }),
});

export const {
  useGetRecipesQuery,
  useGetRecipeByIdQuery,
  useCreateRecipeMutation,
  useUpdateRecipeMutation,
  useDeleteRecipeMutation,
} = recipesApi;
