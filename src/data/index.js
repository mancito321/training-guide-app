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
    'cdeadlift': '/training-guide-app/images/dceadlift.jpeg',
    'pups': '/training-guide-app/images/pullup.jpeg',
    'fsquat': '/training-guide-app/images/fsquatl.jpeg',
    'krows': '/training-guide-app/images/krow.jpeg',
    'drdeadlift': '/training-guide-app/images/drdeadlift.jpeg',
    'srow': '/training-guide-app/images/crow.png',
    'clpushdown': '/training-guide-app/images/clpdiwn.jpeg',
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
    },
    {
      day: 'day4',
      exercises: [
        {
          name: 'Conventional Deadlift',
          metaName: 'cdeadlift',
          sets: '5',
          reps: '5',
          order: 0,
        },
        {
          name: 'Pull Ups',
          metaName: 'pups',
          sets: '3',
          reps: '7-8',
          order: 1,
        },
        {
          name: 'Front Squat',
          metaName: 'fsquat',
          sets: '4',
          reps: '6-8',
          order: 2,
        },
        {
          name: 'Kroc Rows',
          metaName: 'krows',
          sets: '3',
          reps: '12',
          order: 3,
        },
        {
          name: 'Dumbbell Romanian Deadlift',
          metaName: 'drdeadlift',
          sets: '3',
          reps: '12-15',
          order: 4,
        },
        {
          name: 'Seated Row',
          metaName: 'srow',
          sets: '3',
          reps: '12-15',
          order: 5,
        },
        {
          name: 'Cable Lat Pushdowns (Swimmers)',
          metaName: 'clpushdown',
          sets: '3',
          reps: '12-15',
          order: 6,
        },
      ]
    },
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
      {
        id: 'day4',
        name: 'LowerBody Day B'
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
