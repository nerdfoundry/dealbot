// Funny name is so that this actually loads LAST in the system
// It should cause a DuplicateEntry Warning

const config = {
  id: 'pc_build_reddit', // Should collide with pc_build_reddit.js and not be included!
  name: '"Feed Name" for Specific Deal(s)',
  destinations: ['discord_pc'],
  type: 'rss',
  // Will always ensure we have at least this many entries, to avoid stale feed re-cycling
  // Usually the page size (or slightly larger) than that of your input source entry count
  minEntryRetainerCount: 30,
  extraOptions: {
    feed: 'https://www.reddit.com/r/buildapcsales/.rss?sort=new'
  },
  predicate: entry => true
};

module.exports = config;
