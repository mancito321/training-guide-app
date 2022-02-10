export const exerciseMetaData = () => {

  return {
    'pushpress': '/training-guide-app/images/pushpress.png',
    'wchinups': '/training-guide-app/images/weighted-pull-ups.jpeg',
    'idpress': '/training-guide-app/images/incline-dpress.png',
    'borow': '/training-guide-app/images/bent-orows.png',
    'dip': '/training-guide-app/images/dips.png',
    'fpull': '/training-guide-app/images/face-pull.png',
    'crfly': '/training-guide-app/images/reverse-fly.png',
    'sdsnatch': '/training-guide-app/images/singledumbbellsnatch.jpeg',
    'bpress': '/training-guide-app/images/bench press.jpeg',
    'smpress': '/training-guide-app/images/barbell-military-press.png',
    'wpushup': '/training-guide-app/images/weighted-push-ups.webp',
    'urow': '/training-guide-app/images/uprightrow.png',
    'ccfly': '/training-guide-app/images/Middle+Cable+Pec+Fly.jpeg',
    'lraises': '/training-guide-app/images/lateralrises.png',
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
    },
    {
      day: 'day3',
      exercises: [
        {
          name: 'Single Dumbbell Snatch',
          metaName: 'sdsnatch',
          sets: '3',
          reps: '5 per arm',
          order: 0,
        },
        {
          name: 'Bench Press',
          metaName: 'bpress',
          sets: '4',
          reps: '4',
          order: 1,
        },
        {
          name: 'Seated Military Press',
          metaName: 'smpress',
          sets: '4',
          reps: '6',
          order: 2,
        },
        {
          name: 'Weighted Push Ups',
          metaName: 'wpushup',
          sets: '3',
          reps: '8-10',
          order: 3,
        },
        {
          name: 'Upright Row',
          metaName: 'urow',
          sets: '3',
          reps: '8-10',
          order: 4,
        },
        {
          name: 'Cable Chest Fly',
          metaName: 'ccfly',
          sets: '3',
          reps: '12-15',
          order: 5,
        },
        {
          name: 'Lateral Raises',
          metaName: 'lraises',
          sets: '3',
          reps: '12-15',
          order: 6,
        },
      ]
    }
  ]
}

export const trainingList = {
  'greekGod': {
    id: 'greekGod',
    name: 'Greek God',
    days: [
      {
        id: 'day1',
        name: 'UpperBody Day A'
      },
      {
        id: 'day2',
        name: 'LowerBody Day A'
      },
      {
        id: 'day3',
        name: 'UpperBody Day B'
      },
    ],
    trainingOrder : [
      'day1',
      'day2',
      'day3'
    ]
  },
  'inosuke': {
    id: 'inosuke',
    name: 'Inosuke Training'
  }
}
