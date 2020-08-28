module.exports = {
  Query: {
    launches: (_, __, { dataSources }) =>
      dataSources.launchAPI.getAllLaunches(),
    launch: (_, { id }, { dataSources }) =>
      dataSources.launchAPI.getLaunchById({ launchId: id }),
    launchBySite: (_, { site }, { dataSources }) =>
      dataSources.launchAPI.getLaunchBySite({ launchSite: site }),
    launchesBySites: (_, { site }, { dataSources }) =>
      dataSources.launchAPI.getLaunchesBySites({ launchSite: site }),
    me: (_, __, { dataSources }) => dataSources.userAPI.findOrCreateUser()
  }
};