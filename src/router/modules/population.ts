export default {
  path: "/",
  name: "Population",
  component: () => import("@/layout/index.vue"),
  redirect: "/population/person",
  meta: {
    icon: "ri:user-line",
    title: "人口业务",
    rank: 1
  },
  children: [
    {
      path: "/population/person",
      name: "Person",
      redirect: "/population/person/resident-analysis",
      meta: {
        icon: "ri:team-line",
        title: "人员管理"
      },
      children: [
        {
          path: "/population/person/resident-analysis",
          name: "ResidentAnalysis",
          component: () =>
            import("@/views/population/person/resident-analysis/index.vue"),
          meta: {
            title: "住户分析"
          }
        },
        {
          path: "/population/person/moved-out",
          name: "MovedOut",
          component: () =>
            import("@/views/population/person/moved-out/index.vue"),
          meta: {
            title: "搬离人口"
          }
        },
        {
          path: "/population/person/moved-in",
          name: "MovedIn",
          component: () =>
            import("@/views/population/person/moved-in/index.vue"),
          meta: {
            title: "新入住人口"
          }
        }
      ]
    },
    {
      path: "/population/house",
      name: "House",
      redirect: "/population/house/three-real",
      meta: {
        icon: "ri:home-line",
        title: "房屋管理"
      },
      children: [
        {
          path: "/population/house/three-real",
          name: "ThreeReal",
          component: () =>
            import("@/views/population/house/three-real/index.vue"),
          meta: {
            title: "一标三实"
          }
        }
      ]
    }
  ]
} satisfies RouteConfigsTable;
