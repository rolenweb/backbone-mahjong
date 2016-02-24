app.boardLayouts = new app.models.BoardLayouts();

app.boardLayouts.set(
  [
    {
      ID: 1,
      name: 'The Turtle',
      image_url: "images/layouts/the-turtle-layout.png",
      difficulty: "hard",
      layout: [
        [
          [ 0,8,8,8,8,8,8,8,8,8,8,8,8,0,0, ],
          [ 0,0,0,8,8,8,8,8,8,8,8,0,0,0,0, ],
          [ 0,0,8,8,8,8,8,8,8,8,8,8,0,0,0, ],
          [ 2,8,8,8,8,8,8,8,8,8,8,8,8,2,2, ],
          [ 0,8,8,8,8,8,8,8,8,8,8,8,8,0,0, ],
          [ 0,0,8,8,8,8,8,8,8,8,8,8,0,0,0, ],
          [ 0,0,0,8,8,8,8,8,8,8,8,0,0,0,0, ],
          [ 0,8,8,8,8,8,8,8,8,8,8,8,8,0,0, ],
        ],
        [
          [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, ],
          [ 0,0,0,0,8,8,8,8,8,8,0,0,0,0,0, ],
          [ 0,0,0,0,8,8,8,8,8,8,0,0,0,0,0, ],
          [ 0,0,0,0,8,8,8,8,8,8,0,0,0,0,0, ],
          [ 0,0,0,0,8,8,8,8,8,8,0,0,0,0,0, ],
          [ 0,0,0,0,8,8,8,8,8,8,0,0,0,0,0, ],
          [ 0,0,0,0,8,8,8,8,8,8,0,0,0,0,0, ],
          [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, ],
        ],
        [
          [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, ],
          [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, ],
          [ 0,0,0,0,0,8,8,8,8,0,0,0,0,0,0, ],
          [ 0,0,0,0,0,8,8,8,8,0,0,0,0,0,0, ],
          [ 0,0,0,0,0,8,8,8,8,0,0,0,0,0,0, ],
          [ 0,0,0,0,0,8,8,8,8,0,0,0,0,0,0, ],
          [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, ],
          [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, ],
        ],
        [
          [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, ],
          [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, ],
          [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, ],
          [ 0,0,0,0,0,0,8,8,0,0,0,0,0,0,0, ],
          [ 0,0,0,0,0,0,8,8,0,0,0,0,0,0,0, ],
          [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, ],
          [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, ],
          [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, ],
        ],
        [
          [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, ],
          [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, ],
          [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, ],
          [ 0,0,0,0,0,0,1,0,0,0,0,0,0,0,0, ],
          [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, ],
          [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, ],
          [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, ],
          [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, ],
        ],
      ],
    },
    {
      ID: 2,
      name: 'Castle',
      image_url: "images/layouts/the-castle-layout.png",
      difficulty: "extreme",
      layout: [
        [
          [ 8,8,8,8,8,8,8,0,0, ],
          [ 8,8,8,8,8,8,8,0,0, ],
          [ 8,8,8,8,8,8,8,8,0, ],
          [ 8,8,8,8,8,8,8,8,8, ],
          [ 8,8,8,8,8,8,8,8,0, ],
          [ 8,8,8,8,8,8,8,0,0, ],
          [ 8,8,8,8,8,8,8,0,0, ],
        ],
        [
          [ 8,8,8,8,8,8,8,0,0, ],
          [ 8,1,1,1,1,0,8,0,0, ],
          [ 8,1,1,1,1,0,8,0,0, ],
          [ 8,1,1,1,1,0,8,8,0, ],
          [ 8,1,1,1,1,0,8,0,0, ],
          [ 8,0,0,0,0,0,8,0,0, ],
          [ 8,8,8,8,8,8,8,0,0, ],
        ],
        [
          [ 8,8,8,8,8,8,8,0,0, ],
          [ 8,0,0,0,0,0,8,0,0, ],
          [ 8,0,8,8,8,0,8,0,0, ],
          [ 8,0,8,8,8,0,8,0,0, ],
          [ 8,0,8,8,8,0,8,0,0, ],
          [ 8,0,0,0,0,0,8,0,0, ],
          [ 8,8,8,8,8,8,8,0,0, ],
        ],
        [
          [ 8,0,0,0,0,0,8,0,0, ],
          [ 0,0,0,0,0,0,0,0,0, ],
          [ 8,0,1,1,0,0,8,0,0, ],
          [ 0,0,1,1,0,0,0,0,0, ],
          [ 8,0,0,0,0,0,8,0,0, ],
          [ 0,0,0,0,0,0,0,0,0, ],
          [ 8,0,0,0,0,0,8,0,0, ],
        ],
        [
          [ 8,0,0,0,0,0,8,0,0, ],
          [ 0,0,0,0,0,0,0,0,0, ],
          [ 0,0,0,0,0,0,0,0,0, ],
          [ 0,0,0,8,0,0,0,0,0, ],
          [ 0,0,0,0,0,0,0,0,0, ],
          [ 0,0,0,0,0,0,0,0,0, ],
          [ 8,0,0,0,0,0,8,0,0, ],
        ],
      ],
    },
    {
      ID: 3,
      name: 'Harmony',
      image_url: "images/layouts/harmony-layout.png",
      difficulty: "normal",
      layout: [
        [
          [ 8,8,8,8,8,0,0,0,0,0,0,0,0,0,0, ],
          [ 0,8,8,8,8,8,8,8,0,8,8,8,8,0,0, ],
          [ 2,8,8,8,8,0,8,8,8,8,8,8,8,0,0, ],
          [ 2,8,8,8,8,8,8,8,0,8,8,8,8,2,0, ],
          [ 0,8,8,8,8,0,8,8,8,8,8,8,8,2,8, ],
          [ 0,8,8,8,8,8,8,8,0,8,8,8,8,0,0, ],
          [ 8,8,8,8,8,0,8,8,8,8,8,8,8,0,0, ],
          [ 0,0,0,0,0,0,0,0,0,8,8,8,8,8,0, ],
        ],
        [
          [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, ],
          [ 0,8,8,8,0,0,4,0,0,0,0,0,0,0,0, ],
          [ 0,8,8,8,8,0,4,0,0,0,8,8,8,0,0, ],
          [ 8,8,8,8,0,0,4,0,0,8,8,8,8,0,0, ],
          [ 0,8,8,8,8,0,4,0,0,0,8,8,8,8,0, ],
          [ 0,8,8,8,0,0,4,0,0,8,8,8,8,0,0, ],
          [ 0,0,0,0,0,0,4,0,0,0,8,8,8,0,0, ],
          [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, ],
        ],
        [
          [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, ],
          [ 0,0,8,8,0,0,0,0,0,0,0,0,0,0,0, ],
          [ 0,0,8,8,0,0,0,0,0,0,8,8,0,0,0, ],
          [ 0,0,8,8,0,0,0,0,0,0,8,8,0,0,0, ],
          [ 0,0,8,8,0,0,0,0,0,0,8,8,0,0,0, ],
          [ 0,0,8,8,0,0,0,0,0,0,8,8,0,0,0, ],
          [ 0,0,0,0,0,0,0,0,0,0,8,8,0,0,0, ],
          [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, ],
        ],
      ]
    }
  ]
);
