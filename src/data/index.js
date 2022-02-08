export const exerciseMetaData = () => {

  return {
    'pushpress': '/training-guide-app/images/pushpress.png',
    'wchinups': '/training-guide-app/images/weighted-pull-ups.jpeg',
    'idpress': '/training-guide-app/images/incline-dpress.png',
    'borow': '/training-guide-app/images/bent-orows.png',
    'dip': '/training-guide-app/images/dips.png',
    'fpull': '/training-guide-app/images/face-pull.png',
    'crfly': '/training-guide-app/images/reverse-fly.png',
  }
}

export const routineInformation = () => {
  return [
    {
      day: 'day1',
      exercises: [
        {
          name: 'push press',
          metaName: 'pushpress',
          sets: '3',
          reps: '3',
          order: 0,
        },
        {
          name: 'Weighted Chin-Ups',
          metaName: 'wchinups',
          sets: '4',
          reps: '4',
          order: 1,
        },
        {
          name: 'Incline Dumbbell Press',
          metaName: 'idpress',
          sets: '3',
          reps: '6-8',
          order: 2,
        },
        {
          name: 'Bent-Over Row',
          metaName: 'borow',
          sets: '3',
          reps: '6-8',
          order: 3,
        },
        {
          name: 'Dips',
          metaName: 'dip',
          sets: '3',
          reps: '7-8',
          order: 4,
        },
        {
          name: 'Face Pulls',
          metaName: 'fpull',
          sets: '3',
          reps: '12-15',
          order: 5,
        },
        {
          name: 'Cable Reverse Fly',
          metaName: 'crfly',
          sets: '3',
          reps: '12-15',
          order: 6,
        },
      ]
    }
  ]
}