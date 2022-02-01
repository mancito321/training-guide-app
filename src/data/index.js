export const exerciseMetaData = () => {

  return {
    'pushpress': 'https://i.ytimg.com/vi/iaBVSJm78ko/maxresdefault.jpg',
    'wchinups': 'https://i.ytimg.com/vi/OmQU5p5BgcQ/mqdefault.jpg',
    'idpress': 'https://www.burnthefatinnercircle.com/members/images/1749b.jpg',
    'borow': 'https://cdn.mos.cms.futurecdn.net/spmeMadc8qAz59nKTFJmZj.jpg',
    'dip': 'https://qph.fs.quoracdn.net/main-qimg-2f9289811e4f582cb272f6206d48d7a0',
    'fpull': 'https://www.soypowerlifter.com/wp-content/uploads/2019/06/face-pull.png',
    'crfly': 'https://i.pinimg.com/originals/b8/3e/84/b83e847e562b005627e35faea0c172da.png',
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