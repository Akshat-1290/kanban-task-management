const boards = [
  {
    id: "2921bfa3-3495-4c12-98ae-3d0e71a7e43b",
    name: "Platform Launch",
    columns: [
      {
        id: "b07835f9-f93d-4d1f-8284-096d7d578eb6",
        name: "Todo",
        tasks: [
          {
            id: "ca632dc1-a3a4-40a7-a98c-734ec0a6edb4",
            title: "Build UI for onboarding flow",
            description: "",
            status: "Todo",
            subtasks: [
              {
                id: "eaeca956-daf3-4ac5-8285-b18bea45e29f",
                title: "Sign up page",
                isCompleted: true,
                taskId: "ca632dc1-a3a4-40a7-a98c-734ec0a6edb4",
              },
              {
                id: "e122658f-6e2f-4bc1-aaa0-884238f675d7",
                title: "Sign in page",
                isCompleted: false,
                taskId: "ca632dc1-a3a4-40a7-a98c-734ec0a6edb4",
              },
              {
                id: "8765061a-119a-4006-937e-5a37bac1399c",
                title: "Welcome page",
                isCompleted: false,
                taskId: "ca632dc1-a3a4-40a7-a98c-734ec0a6edb4",
              },
            ],
            columnId: "b07835f9-f93d-4d1f-8284-096d7d578eb6",
          },
          {
            id: "b4b2ab53-17e7-45db-bf8a-2c669cd2c32a",
            title: "Build UI for search",
            description: "",
            status: "Todo",
            subtasks: [
              {
                id: "7b1144e3-9d4c-42f9-b04f-6d0fef657cad",
                title: "Search page",
                isCompleted: false,
                taskId: "b4b2ab53-17e7-45db-bf8a-2c669cd2c32a",
              },
            ],
            columnId: "b07835f9-f93d-4d1f-8284-096d7d578eb6",
          },
          {
            id: "79b1234c-ef2e-497c-8078-8656270dcaae",
            title: "Build settings UI",
            description: "",
            status: "Todo",
            subtasks: [
              {
                id: "b880d843-7396-4f94-9608-51a5d618a217",
                title: "Account page",
                isCompleted: false,
                taskId: "79b1234c-ef2e-497c-8078-8656270dcaae",
              },
              {
                id: "c7767805-e973-4e4c-bfa5-b100bfe0a393",
                title: "Billing page",
                isCompleted: false,
                taskId: "79b1234c-ef2e-497c-8078-8656270dcaae",
              },
            ],
            columnId: "b07835f9-f93d-4d1f-8284-096d7d578eb6",
          },
          {
            id: "e600a87a-8458-49f3-bad3-24d3f472f08b",
            title: "QA and test all major user journeys",
            description:
              "Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.",
            status: "Todo",
            subtasks: [
              {
                id: "afce8ca6-b024-44f1-8c51-0e4dd967809f",
                title: "Internal testing",
                isCompleted: false,
                taskId: "e600a87a-8458-49f3-bad3-24d3f472f08b",
              },
              {
                id: "fa598730-606d-4fe5-967c-1e9864caf84c",
                title: "External testing",
                isCompleted: false,
                taskId: "e600a87a-8458-49f3-bad3-24d3f472f08b",
              },
            ],
            columnId: "b07835f9-f93d-4d1f-8284-096d7d578eb6",
          },
        ],
        boardId: "2921bfa3-3495-4c12-98ae-3d0e71a7e43b",
      },
      {
        id: "e5f0ee98-1964-4d18-bf09-4155910fda18",
        name: "Doing",
        tasks: [
          {
            id: "a98c5a96-1580-4ca5-b264-72ffe6a4f612",
            title: "Design settings and search pages",
            description: "",
            status: "Doing",
            subtasks: [
              {
                id: "c24ab0cc-c607-4750-9877-65635691cb02",
                title: "Settings - Account page",
                isCompleted: true,
                taskId: "a98c5a96-1580-4ca5-b264-72ffe6a4f612",
              },
              {
                id: "01d5283f-836a-48b7-aa56-82d7a95e3921",
                title: "Settings - Billing page",
                isCompleted: true,
                taskId: "a98c5a96-1580-4ca5-b264-72ffe6a4f612",
              },
              {
                id: "cf08286d-e632-4b4d-b138-e851109b6cb9",
                title: "Search page",
                isCompleted: false,
                taskId: "a98c5a96-1580-4ca5-b264-72ffe6a4f612",
              },
            ],
            columnId: "e5f0ee98-1964-4d18-bf09-4155910fda18",
          },
          {
            id: "adcb4f38-21fb-4b8d-b5de-4965b52811dc",
            title: "Add account management endpoints",
            description: "",
            status: "Doing",
            subtasks: [
              {
                id: "1837ff4b-0505-4806-b202-a82b40512f8d",
                title: "Upgrade plan",
                isCompleted: true,
                taskId: "adcb4f38-21fb-4b8d-b5de-4965b52811dc",
              },
              {
                id: "4551d655-cf03-4c5c-ab3a-7dcc15355c80",
                title: "Cancel plan",
                isCompleted: true,
                taskId: "adcb4f38-21fb-4b8d-b5de-4965b52811dc",
              },
              {
                id: "cd296e30-411b-4d2d-86c8-4e95d79a2de7",
                title: "Update payment method",
                isCompleted: false,
                taskId: "adcb4f38-21fb-4b8d-b5de-4965b52811dc",
              },
            ],
            columnId: "e5f0ee98-1964-4d18-bf09-4155910fda18",
          },
          {
            id: "39de304d-de48-4fa5-aa16-82380221c869",
            title: "Design onboarding flow",
            description: "",
            status: "Doing",
            subtasks: [
              {
                id: "944eedd8-83f5-4692-b690-35edfa8c9ec3",
                title: "Sign up page",
                isCompleted: true,
                taskId: "39de304d-de48-4fa5-aa16-82380221c869",
              },
              {
                id: "7a58b9df-9348-4f7a-abf8-eeb01e66230e",
                title: "Sign in page",
                isCompleted: false,
                taskId: "39de304d-de48-4fa5-aa16-82380221c869",
              },
              {
                id: "e3da7922-5682-4470-a474-3beeee363e69",
                title: "Welcome page",
                isCompleted: false,
                taskId: "39de304d-de48-4fa5-aa16-82380221c869",
              },
            ],
            columnId: "e5f0ee98-1964-4d18-bf09-4155910fda18",
          },
          {
            id: "da64a11e-0a9b-4add-a310-416cdd39476d",
            title: "Add search enpoints",
            description: "",
            status: "Doing",
            subtasks: [
              {
                id: "4a3ba16e-6727-4543-af69-c1a7d0ba3d9f",
                title: "Add search endpoint",
                isCompleted: true,
                taskId: "da64a11e-0a9b-4add-a310-416cdd39476d",
              },
              {
                id: "216c6723-e1fa-46dd-8f6e-29805dafcd27",
                title: "Define search filters",
                isCompleted: false,
                taskId: "da64a11e-0a9b-4add-a310-416cdd39476d",
              },
            ],
            columnId: "e5f0ee98-1964-4d18-bf09-4155910fda18",
          },
          {
            id: "eea9a1b2-3a51-435e-9e9c-82a165cc945a",
            title: "Add authentication endpoints",
            description: "",
            status: "Doing",
            subtasks: [
              {
                id: "54a1f792-6df3-4a2a-bfa3-ace375a4590e",
                title: "Define user model",
                isCompleted: true,
                taskId: "eea9a1b2-3a51-435e-9e9c-82a165cc945a",
              },
              {
                id: "d3f01478-73d6-43ab-b266-1efaf82cba87",
                title: "Add auth endpoints",
                isCompleted: false,
                taskId: "eea9a1b2-3a51-435e-9e9c-82a165cc945a",
              },
            ],
            columnId: "e5f0ee98-1964-4d18-bf09-4155910fda18",
          },
          {
            id: "706f0872-5ce6-4ccb-981a-5233d3107fae",
            title:
              "Research pricing points of various competitors and trial different business models",
            description:
              "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
            status: "Doing",
            subtasks: [
              {
                id: "ccbaf9cc-50a4-4851-8350-4c652b5d2952",
                title: "Research competitor pricing and business models",
                isCompleted: true,
                taskId: "706f0872-5ce6-4ccb-981a-5233d3107fae",
              },
              {
                id: "c8b01166-91f9-4070-bde9-bf091979fe94",
                title: "Outline a business model that works for our solution",
                isCompleted: false,
                taskId: "706f0872-5ce6-4ccb-981a-5233d3107fae",
              },
              {
                id: "88b39769-16e4-47c0-8165-fd517860e211",
                title:
                  "Talk to potential customers about our proposed solution and ask for fair price expectancy",
                isCompleted: false,
                taskId: "706f0872-5ce6-4ccb-981a-5233d3107fae",
              },
            ],
            columnId: "e5f0ee98-1964-4d18-bf09-4155910fda18",
          },
        ],
        boardId: "2921bfa3-3495-4c12-98ae-3d0e71a7e43b",
      },
      {
        id: "bc26dffd-f65e-4e94-9273-9c9bf6758ab5",
        name: "Done",
        tasks: [
          {
            id: "d9726a6d-2747-492b-b87c-cb0302e84db6",
            title: "Conduct 5 wireframe tests",
            description:
              "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
            status: "Done",
            subtasks: [
              {
                id: "17203aac-8ab4-44e1-a9a5-9b55c4cbd1dc",
                title: "Complete 5 wireframe prototype tests",
                isCompleted: true,
                taskId: "d9726a6d-2747-492b-b87c-cb0302e84db6",
              },
            ],
            columnId: "bc26dffd-f65e-4e94-9273-9c9bf6758ab5",
          },
          {
            id: "c7f193c1-c2ae-4b49-a9da-1c01808e3515",
            title: "Create wireframe prototype",
            description:
              "Create a greyscale clickable wireframe prototype to test our asssumptions so far.",
            status: "Done",
            subtasks: [
              {
                id: "6cd4f742-6eae-460c-8f3e-bab62f360975",
                title: "Create clickable wireframe prototype in Balsamiq",
                isCompleted: true,
                taskId: "c7f193c1-c2ae-4b49-a9da-1c01808e3515",
              },
            ],
            columnId: "bc26dffd-f65e-4e94-9273-9c9bf6758ab5",
          },
          {
            id: "b6e4c38c-95c3-4212-99af-0022d820d3ab",
            title: "Review results of usability tests and iterate",
            description:
              "Keep iterating through the subtasks until we're clear on the core concepts for the app.",
            status: "Done",
            subtasks: [
              {
                id: "64511ce5-57fb-489e-b74c-3158aad7cdc0",
                title:
                  "Meet to review notes from previous tests and plan changes",
                isCompleted: true,
                taskId: "b6e4c38c-95c3-4212-99af-0022d820d3ab",
              },
              {
                id: "db708bd2-7605-4de3-8887-b88b76c28377",
                title: "Make changes to paper prototypes",
                isCompleted: true,
                taskId: "b6e4c38c-95c3-4212-99af-0022d820d3ab",
              },
              {
                id: "6ce0652b-e428-48af-9937-1cf01ad4658c",
                title: "Conduct 5 usability tests",
                isCompleted: true,
                taskId: "b6e4c38c-95c3-4212-99af-0022d820d3ab",
              },
            ],
            columnId: "bc26dffd-f65e-4e94-9273-9c9bf6758ab5",
          },
          {
            id: "760d825e-f1a9-41ee-a348-12675d0a605c",
            title:
              "Create paper prototypes and conduct 10 usability tests with potential customers",
            description: "",
            status: "Done",
            subtasks: [
              {
                id: "59c09f42-5744-4c0e-a3b7-f91a19aee7fa",
                title: "Create paper prototypes for version one",
                isCompleted: true,
                taskId: "760d825e-f1a9-41ee-a348-12675d0a605c",
              },
              {
                id: "8501dcf6-3335-49b7-befc-0c2dad9637e4",
                title: "Complete 10 usability tests",
                isCompleted: true,
                taskId: "760d825e-f1a9-41ee-a348-12675d0a605c",
              },
            ],
            columnId: "bc26dffd-f65e-4e94-9273-9c9bf6758ab5",
          },
          {
            id: "d09fd69d-4036-4636-b2d3-286ac698688a",
            title: "Market discovery",
            description:
              "We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.",
            status: "Done",
            subtasks: [
              {
                id: "abccd594-30c7-449e-b1fc-0bdf109bfe5c",
                title: "Interview 10 prospective customers",
                isCompleted: true,
                taskId: "d09fd69d-4036-4636-b2d3-286ac698688a",
              },
            ],
            columnId: "bc26dffd-f65e-4e94-9273-9c9bf6758ab5",
          },
          {
            id: "01be54a3-fff4-4ee8-9d82-a3f87d51288e",
            title: "Competitor analysis",
            description: "",
            status: "Done",
            subtasks: [
              {
                id: "ae86b4ff-3c09-4526-aba4-d406cfe91f87",
                title: "Find direct and indirect competitors",
                isCompleted: true,
                taskId: "01be54a3-fff4-4ee8-9d82-a3f87d51288e",
              },
              {
                id: "6b8de984-8244-437a-bfa9-694395fa5ea9",
                title: "SWOT analysis for each competitor",
                isCompleted: true,
                taskId: "01be54a3-fff4-4ee8-9d82-a3f87d51288e",
              },
            ],
            columnId: "bc26dffd-f65e-4e94-9273-9c9bf6758ab5",
          },
          {
            id: "1d116522-1626-4cf4-847e-033d4aedf82c",
            title: "Research the market",
            description:
              "We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.",
            status: "Done",
            subtasks: [
              {
                id: "faeaf880-1868-4307-85f5-d219db1a51cf",
                title: "Write up research analysis",
                isCompleted: true,
                taskId: "1d116522-1626-4cf4-847e-033d4aedf82c",
              },
              {
                id: "82fd651f-ec13-467a-a79c-61657a4251d4",
                title: "Calculate TAM",
                isCompleted: true,
                taskId: "1d116522-1626-4cf4-847e-033d4aedf82c",
              },
            ],
            columnId: "bc26dffd-f65e-4e94-9273-9c9bf6758ab5",
          },
        ],
        boardId: "2921bfa3-3495-4c12-98ae-3d0e71a7e43b",
      },
    ],
  },
  {
    id: "01c2372c-ee71-4b03-881c-dfefa83e3f77",
    name: "Marketing Plan",
    columns: [
      {
        id: "cd5cca49-2bb0-4f35-b1b0-2d341692472c",
        name: "Todo",
        tasks: [
          {
            id: "cf135d97-1e95-4940-a0d8-0096c6e960c3",
            title: "Plan Product Hunt launch",
            description: "",
            status: "Todo",
            subtasks: [
              {
                id: "e4a0e2fd-86f7-4821-89a5-6de622a37e0d",
                title: "Find hunter",
                isCompleted: false,
                taskId: "cf135d97-1e95-4940-a0d8-0096c6e960c3",
              },
              {
                id: "7c353134-4176-4d82-af7f-b559fc37d759",
                title: "Gather assets",
                isCompleted: false,
                taskId: "cf135d97-1e95-4940-a0d8-0096c6e960c3",
              },
              {
                id: "eaa8ca0a-e7f0-46a3-b335-8587ef4a141f",
                title: "Draft product page",
                isCompleted: false,
                taskId: "cf135d97-1e95-4940-a0d8-0096c6e960c3",
              },
              {
                id: "37d0e113-9cb3-420f-a7c6-9d7e810f8441",
                title: "Notify customers",
                isCompleted: false,
                taskId: "cf135d97-1e95-4940-a0d8-0096c6e960c3",
              },
              {
                id: "b308b7e2-15e7-4b92-9378-a8e27047e8e3",
                title: "Notify network",
                isCompleted: false,
                taskId: "cf135d97-1e95-4940-a0d8-0096c6e960c3",
              },
              {
                id: "744abf39-59ff-41e4-9d56-617a1163eda9",
                title: "Launch!",
                isCompleted: false,
                taskId: "cf135d97-1e95-4940-a0d8-0096c6e960c3",
              },
            ],
            columnId: "cd5cca49-2bb0-4f35-b1b0-2d341692472c",
          },
          {
            id: "b75692d7-6ee9-45f8-83d6-b8920782900d",
            title: "Share on Show HN",
            description: "",
            status: "",
            subtasks: [
              {
                id: "6c8ae69d-1e6a-495a-a2e4-00f75b485043",
                title: "Draft out HN post",
                isCompleted: false,
                taskId: "b75692d7-6ee9-45f8-83d6-b8920782900d",
              },
              {
                id: "f6bbeda7-ea4d-4b93-83c9-9a75a67f21ca",
                title: "Get feedback and refine",
                isCompleted: false,
                taskId: "b75692d7-6ee9-45f8-83d6-b8920782900d",
              },
              {
                id: "69d7b073-e444-49bd-89a8-aa1a4fe0f825",
                title: "Publish post",
                isCompleted: false,
                taskId: "b75692d7-6ee9-45f8-83d6-b8920782900d",
              },
            ],
            columnId: "cd5cca49-2bb0-4f35-b1b0-2d341692472c",
          },
          {
            id: "e3f59e16-7542-42f1-a08c-bd2ff66425f6",
            title: "Write launch article to publish on multiple channels",
            description: "",
            status: "",
            subtasks: [
              {
                id: "652d92b6-7db3-49cc-9e46-d5268ef43616",
                title: "Write article",
                isCompleted: false,
                taskId: "e3f59e16-7542-42f1-a08c-bd2ff66425f6",
              },
              {
                id: "279c478a-8d23-4b5d-8fec-4e819be03cc8",
                title: "Publish on LinkedIn",
                isCompleted: false,
                taskId: "e3f59e16-7542-42f1-a08c-bd2ff66425f6",
              },
              {
                id: "3115bbe1-8542-4f43-83aa-767932aebf4a",
                title: "Publish on Inndie Hackers",
                isCompleted: false,
                taskId: "e3f59e16-7542-42f1-a08c-bd2ff66425f6",
              },
              {
                id: "78678d3c-c744-4a25-8f52-9710c81c960f",
                title: "Publish on Medium",
                isCompleted: false,
                taskId: "e3f59e16-7542-42f1-a08c-bd2ff66425f6",
              },
            ],
            columnId: "cd5cca49-2bb0-4f35-b1b0-2d341692472c",
          },
        ],
        boardId: "01c2372c-ee71-4b03-881c-dfefa83e3f77",
      },
      {
        id: "8826576e-16fb-4ebb-9fb4-c42b3fb62633",
        name: "Doing",
        tasks: [],
        boardId: "01c2372c-ee71-4b03-881c-dfefa83e3f77",
      },
      {
        id: "f731adc3-a7b6-4a45-ad3f-f0bb9612e067",
        name: "Done",
        tasks: [],
        boardId: "01c2372c-ee71-4b03-881c-dfefa83e3f77",
      },
    ],
  },
  {
    id: "1c4558b8-6bd4-423b-a3a4-9ff312c65bf9",
    name: "Roadmap",
    columns: [
      {
        id: "f55e4292-2971-4131-aaec-9eef66b63ea8",
        name: "Now",
        tasks: [
          {
            id: "f31adfbf-4639-415e-b23d-7a225aa6b3b8",
            title: "Launch version one",
            description: "",
            status: "",
            subtasks: [
              {
                id: "c77179c6-2cfb-493f-b8f9-d9307ec53cec",
                title: "Launch privately to our waitlist",
                isCompleted: false,
                taskId: "f31adfbf-4639-415e-b23d-7a225aa6b3b8",
              },
              {
                id: "089423c4-e628-4bb4-84fb-d01cabc8daf1",
                title: "Launch publicly on PH, HN, etc.",
                isCompleted: false,
                taskId: "f31adfbf-4639-415e-b23d-7a225aa6b3b8",
              },
            ],
            columnId: "f55e4292-2971-4131-aaec-9eef66b63ea8",
          },
          {
            id: "e63192bf-bbef-43c5-9e9b-6f41193ee360",
            title: "Review early feedback and plan next steps for roadmap",
            description:
              "Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.",
            status: "",
            subtasks: [
              {
                id: "0b78e9ad-5eda-4818-8bfb-44fc52b070cf",
                title: "Interview 10 customers",
                isCompleted: false,
                taskId: "e63192bf-bbef-43c5-9e9b-6f41193ee360",
              },
              {
                id: "0f78290b-ca22-4cdd-98df-9f69e9b649af",
                title: "Review common customer pain points and suggestions",
                isCompleted: false,
                taskId: "e63192bf-bbef-43c5-9e9b-6f41193ee360",
              },
              {
                id: "074d1594-b47f-45cc-a3ac-3292990a2fda",
                title: "Outline next steps for our roadmap",
                isCompleted: false,
                taskId: "e63192bf-bbef-43c5-9e9b-6f41193ee360",
              },
            ],
            columnId: "f55e4292-2971-4131-aaec-9eef66b63ea8",
          },
        ],
        boardId: "1c4558b8-6bd4-423b-a3a4-9ff312c65bf9",
      },
      {
        id: "5097353a-dde4-429e-8c63-2e457bd8a1b3",
        name: "Next",
        tasks: [],
        boardId: "1c4558b8-6bd4-423b-a3a4-9ff312c65bf9",
      },
      {
        id: "e2ff4096-7292-4f5c-a324-795380f2d5bd",
        name: "Later",
        tasks: [],
        boardId: "1c4558b8-6bd4-423b-a3a4-9ff312c65bf9",
      },
    ],
  },
];

export default boards;
