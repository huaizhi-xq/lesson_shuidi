Page({
  data: {
    entities: [
      {
        imageUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=39718158,981530933&fm=111&gp=0.jpg',
        title: 'a',
        description: 'aa'
      },
      {
        imageUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3460829502,3673134540&fm=26&gp=0.jpg',
        title: 'b',
        description: 'bb'
      },
      {
        imageUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2559166919,2752112482&fm=26&gp=0.jpg',
        title: 'c',
        description: 'cc'
      }
    ],
  },
  onLoad() {
    console.log('onload');
  },
  onReachBottom() {
    console.log('触底了');
  }
})