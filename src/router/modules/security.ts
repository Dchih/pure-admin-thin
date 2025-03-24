export default {
  path: "/security",
  name: "Security",
  component: () => import("@/layout/index.vue"),
  redirect: "/security/defense",
  meta: {
    icon: "ri:shield-line",
    title: "治安业务",
    rank: 2
  },
  children: [
    {
      path: "/security/defense",
      name: "Defense",
      redirect: "/security/defense/real-time-capture",
      meta: {
        icon: "ri:camera-line",
        title: "安防记录"
      },
      children: [
        {
          path: "/security/defense/real-time-capture",
          name: "RealTimeCapture",
          component: () =>
            import("@/views/security/defense/real-time-capture/index.vue"),
          meta: {
            title: "实时抓拍"
          },
          children: [
            {
              path: "/security/defense/real-time-capture/archive-detail",
              name: "ArchiveDetail",
              component: () =>
                import("@/views/security/defense/archive-detail/index.vue"),
              meta: {
                title: "实时抓拍",
                showLink: false,
                hiddenTag: true
              }
            }
          ]
        },
        {
          path: "/security/defense/face-search",
          name: "FaceSearch",
          component: () =>
            import("@/views/security/defense/face-search/index.vue"),
          meta: {
            title: "人像检索"
          }
        },
        {
          path: "/security/defense/access-records",
          name: "AccessRecords",
          component: () =>
            import("@/views/security/defense/access-records/index.vue"),
          meta: {
            title: "通行记录"
          }
        },
        {
          path: "/security/defense/face-archive",
          name: "FaceArchive",
          component: () =>
            import("@/views/security/defense/face-archive/index.vue"),
          meta: {
            title: "人像归档"
          }
        }
      ]
    }
  ]
} satisfies RouteConfigsTable;
