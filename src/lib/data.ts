export const boards = [
  {
    id: "2921bfa3-3495-4c12-98ae-3d0e71a7e43b",
    name: "Platform Launch",
    columns: [
      {
        id: "b07835f9-f93d-4d1f-8284-096d7d578eb6",
        boardId: "2921bfa3-3495-4c12-98ae-3d0e71a7e43b",
        name: "Todo",
        tasks: [
          {
            id: "ca632dc1-a3a4-40a7-a98c-734ec0a6edb4",
            columnId: "b07835f9-f93d-4d1f-8284-096d7d578eb6",
            title: "Build UI for onboarding flow",
            description: "",
            status: "Todo",
            subtasks: [
              {
                id: "eaeca956-daf3-4ac5-8285-b18bea45e29f",
                taskId: "ca632dc1-a3a4-40a7-a98c-734ec0a6edb4",
                title: "Sign up page",
                isCompleted: true,
              },
              {
                id: "e122658f-6e2f-4bc1-aaa0-884238f675d7",
                taskId: "ca632dc1-a3a4-40a7-a98c-734ec0a6edb4",
                title: "Sign in page",
                isCompleted: false,
              },
              {
                id: "8765061a-119a-4006-937e-5a37bac1399c",
                taskId: "ca632dc1-a3a4-40a7-a98c-734ec0a6edb4",
                title: "Welcome page",
                isCompleted: false,
              },
            ],
          },
          {
            id: "b4b2ab53-17e7-45db-bf8a-2c669cd2c32a",
            columnId: "b07835f9-f93d-4d1f-8284-096d7d578eb6",
            title: "Build UI for search",
            description: "",
            status: "Todo",
            subtasks: [
              {
                id: "7b1144e3-9d4c-42f9-b04f-6d0fef657cad",
                taskId: "b4b2ab53-17e7-45db-bf8a-2c669cd2c32a",
                title: "Search page",
                isCompleted: false,
              },
            ],
          },
          {
            id: "79b1234c-ef2e-497c-8078-8656270dcaae",
            columnId: "b07835f9-f93d-4d1f-8284-096d7d578eb6",
            title: "Build settings UI",
            description: "",
            status: "Todo",
            subtasks: [
              {
                id: "b880d843-7396-4f94-9608-51a5d618a217",
                taskId: "79b1234c-ef2e-497c-8078-8656270dcaae",
                title: "Account page",
                isCompleted: false,
              },
              {
                id: "c7767805-e973-4e4c-bfa3-b100bfe0a393",
                taskId: "79b1234c-ef2e-497c-8078-8656270dcaae",
                title: "Billing page",
                isCompleted: false,
              },
            ],
          },
          {
            id: "e600a87a-8458-49f3-bad3-24d3f472f08b",
            columnId: "b07835f9-f93d-4d1f-8284-096d7d578eb6",
            title: "QA and test all major user journeys",
            description:
              "Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.",
            status: "Todo",
            subtasks: [
              {
                id: "afce8ca6-b024-44f1-8c51-0e4dd967809f",
                taskId: "e600a87a-8458-49f3-bad3-24d3f472f08b",
                title: "Internal testing",
                isCompleted: false,
              },
              {
                id: "fa598730-606d-4fe5-967c-1e9864caf84c",
                taskId: "e600a87a-8458-49f3-bad3-24d3f472f08b",
                title: "External testing",
                isCompleted: false,
              },
            ],
          },
        ],
      },
      {
        id: "e5f0ee98-1964-4d18-bf09-4155910fda18",
        boardId: "2921bfa3-3495-4c12-98ae-3d0e71a7e43b",
        name: "Doing",
        tasks: [
          {
            id: "a98c5a96-1580-4ca5-b264-72ffe6a4f612",
            columnId: "e5f0ee98-1964-4d18-bf09-4155910fda18",
            title: "Design settings and search pages",
            description: "",
            status: "Doing",
            subtasks: [
              {
                id: "c24ab0cc-c607-4750-9877-65635691cb02",
                taskId: "a98c5a96-1580-4ca5-b264-72ffe6a4f612",
                title: "Settings - Account page",
                isCompleted: true,
              },
              {
                id: "01d5283f-836a-48b7-aa56-82d7a95e3921",
                taskId: "a98c5a96-1580-4ca5-b264-72ffe6a4f612",
                title: "Settings - Billing page",
                isCompleted: true,
              },
              {
                id: "cf08286d-e632-4b4d-b138-e851109b6cb9",
                taskId: "a98c5a96-1580-4ca5-b264-72ffe6a4f612",
                title: "Search page",
                isCompleted: false,
              },
            ],
          },
          {
            id: "adcb4f38-21fb-4b8d-b5de-4965b52811dc",
            columnId: "e5f0ee98-1964-4d18-bf09-4155910fda18",
            title: "Add account management endpoints",
            description: "",
            status: "Doing",
            subtasks: [
              {
                id: "1837ff4b-0505-4806-b202-a82b40512f8d",
                taskId: "adcb4f38-21fb-4b8d-b5de-4965b52811dc",
                title: "Upgrade plan",
                isCompleted: true,
              },
              {
                id: "4551d655-cf03-4c5c-ab3a-7dcc15355c80",
                taskId: "adcb4f38-21fb-4b8d-b5de-4965b52811dc",
                title: "Cancel plan",
                isCompleted: true,
              },
              {
                id: "cd296e30-411b-4d2d-86c8-4e95d79a2de7",
                taskId: "adcb4f38-21fb-4b8d-b5de-4965b52811dc",
                title: "Update payment method",
                isCompleted: false,
              },
            ],
          },
          {
            id: "39de304d-de48-4fa5-aa16-82380221c869",
            columnId: "e5f0ee98-1964-4d18-bf09-4155910fda18",
            title: "Design onboarding flow",
            description: "",
            status: "Doing",
            subtasks: [
              {
                id: "944eedd8-83f5-4692-b690-35edfa8c9ec3",
                taskId: "39de304d-de48-4fa5-aa16-82380221c869",
                title: "Sign up page",
                isCompleted: true,
              },
              {
                id: "7a58b9df-9348-4f7a-abf8-eeb01e66230e",
                taskId: "39de304d-de48-4fa5-aa16-82380221c869",
                title: "Sign in page",
                isCompleted: false,
              },
              {
                id: "9e61fa44-7f7f-41a3-814d-c31411c4e07b",
                taskId: "39de304d-de48-4fa5-aa16-82380221c869",
                title: "Welcome page",
                isCompleted: false,
              },
            ],
          },
          {
            id: "b7642922-0bc6-43a4-8f0e-1f5a07eaff26",
            columnId: "e5f0ee98-1964-4d18-bf09-4155910fda18",
            title: "Add search endpoints",
            description: "",
            status: "Doing",
            subtasks: [
              {
                id: "29f1d78e-9881-4a4e-bd4e-3c3b6a14fd6a",
                taskId: "b7642922-0bc6-43a4-8f0e-1f5a07eaff26",
                title: "Search users",
                isCompleted: false,
              },
              {
                id: "15f5d22c-d195-455a-9dbb-69efb83fcf09",
                taskId: "b7642922-0bc6-43a4-8f0e-1f5a07eaff26",
                title: "Search items",
                isCompleted: false,
              },
            ],
          },
        ],
      },
      {
        id: "4b5a5f97-9077-49c2-b6be-975dd5f7e55c",
        boardId: "2921bfa3-3495-4c12-98ae-3d0e71a7e43b",
        name: "Done",
        tasks: [
          {
            id: "e27c6d0e-d2e8-44b5-b2d8-cabf93ad8cf5",
            columnId: "4b5a5f97-9077-49c2-b6be-975dd5f7e55c",
            title: "Conduct 5 wireframe tests",
            description:
              "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
            status: "Done",
            subtasks: [
              {
                id: "e6b7a8d2-6e64-43bc-9dd7-4b88861b52c8",
                taskId: "e27c6d0e-d2e8-44b5-b2d8-cabf93ad8cf5",
                title: "Complete 5 wireframe prototype tests",
                isCompleted: true,
              },
            ],
          },
          {
            id: "a52fd295-28a1-4965-bc8a-4d4bbd52db98",
            columnId: "4b5a5f97-9077-49c2-b6be-975dd5f7e55c",
            title: "Create wireframe prototype",
            description: "",
            status: "Done",
            subtasks: [
              {
                id: "b0d57a3b-00a1-45fa-9a02-01f0541c3b90",
                taskId: "a52fd295-28a1-4965-bc8a-4d4bbd52db98",
                title: "Create wireframe prototype",
                isCompleted: true,
              },
            ],
          },
          {
            id: "39660c68-1b66-4d19-b907-bb799e3ff189",
            columnId: "4b5a5f97-9077-49c2-b6be-975dd5f7e55c",
            title: "Review results of usability tests and iterate",
            description:
              "Keep iterating through various usability tests and improving the prototype.",
            status: "Done",
            subtasks: [
              {
                id: "31d8b8b2-1f0a-4228-8e0e-b7df7e6af042",
                taskId: "39660c68-1b66-4d19-b907-bb799e3ff189",
                title: "Meet to review usability test findings",
                isCompleted: true,
              },
              {
                id: "c133e8c3-5f27-42da-8d5b-d9b4e98a6427",
                taskId: "39660c68-1b66-4d19-b907-bb799e3ff189",
                title: "Iterate on new designs",
                isCompleted: true,
              },
            ],
          },
          {
            id: "b0344a8c-358f-40a3-8b02-f3e4d9a89a9f",
            columnId: "4b5a5f97-9077-49c2-b6be-975dd5f7e55c",
            title: "Conduct 5 usability tests",
            description: "",
            status: "Done",
            subtasks: [
              {
                id: "eda1ed58-8ba6-495d-b0ad-920f4e2721c3",
                taskId: "b0344a8c-358f-40a3-8b02-f3e4d9a89a9f",
                title: "Complete 5 usability tests",
                isCompleted: true,
              },
            ],
          },
        ],
      },
    ],
  },
];

