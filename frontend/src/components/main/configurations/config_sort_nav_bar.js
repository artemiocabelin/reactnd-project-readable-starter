export const SORT_ORDERS = {
      top: {
        label: 'Top',
        isActive: false,
        order: '-voteScore'
      },
      newest: {
        label: 'Newest',
        isActive: false,
        order: '-timestamp'
      },
      oldest: {
        label: 'Oldest',
        isActive: false,
        order: 'timestamp'
      },
      controversial: {
        label: 'Controversial',
        isActive: false,
        order: 'voteScore'
      }
    }