(function() {

  function comenta(message, callback) {
    var comments = [
      'http://i.imgur.com/SzBELuH.png',
      'http://i.imgur.com/YXnf3hy.png',
      'http://i.imgur.com/yi1yQlf.png',
      'http://i.imgur.com/mYiecBC.png',
      'http://i.imgur.com/8fPHDHJ.png',
      'http://i.imgur.com/GBnlGZv.png',
      'http://i.imgur.com/xDIo2yc.png',
      'http://i.imgur.com/Xh23IFS.png',
      'http://i.imgur.com/GEU1TbN.png',
      'http://i.imgur.com/8rVO8B0.png',
      'http://i.imgur.com/QZChZ6j.png',
      'http://i.imgur.com/Fzj590v.png',
      'http://i.imgur.com/g1FCVEk.png',
      'http://i.imgur.com/FUUsfXC.png',
      'http://i.imgur.com/kLqgoBe.png',
      'http://i.imgur.com/ote58bt.png',
      'http://i.imgur.com/ybrEkzB.png',
      'http://i.imgur.com/GIfSVsO.png',
      'http://i.imgur.com/fGuHS6b.png',
      'http://i.imgur.com/iHMkWni.png',
      'http://i.imgur.com/neup1f2.png',
      'http://i.imgur.com/6RFK6wr.png',
      'http://i.imgur.com/JhD7FNR.png',
      'http://i.imgur.com/2eiNi4l.png',
      'http://i.imgur.com/NAYkJ8d.png',
      'http://i.imgur.com/DUCWHD2.png',
      'http://i.imgur.com/aw55ojw.png',
      'http://i.imgur.com/HHzt7K9.png',
      'http://i.imgur.com/y9FF9B6.png',
      'http://i.imgur.com/MPfEfE1.png',
      'http://i.imgur.com/QIOMLS6.png',
      'http://i.imgur.com/ntMaFt2.png',
      'http://i.imgur.com/Fy7lFce.png',
      'http://i.imgur.com/SvB9K1H.png',
      'http://i.imgur.com/5XqrY1u.png',
      'http://i.imgur.com/gcVxkZO.png',
      'http://i.imgur.com/dd6QeOk.png',
      'http://i.imgur.com/8nBxsK9.png',
      'http://i.imgur.com/3eZj5r4.png',
      'http://i.imgur.com/hyampEA.png',
      'http://i.imgur.com/mG9M1S5.png',
      'http://i.imgur.com/3x2n5ds.png',
      'http://i.imgur.com/UEM4AmD.png',
      'http://i.imgur.com/4iHVaCE.png',
      'http://i.imgur.com/XHgbuyH.png',
      'http://i.imgur.com/d9CPyqD.png',
      'http://i.imgur.com/YH3NRMf.png',
      'http://i.imgur.com/223HpIJ.png',
      'http://i.imgur.com/pRSrODr.png',
      'http://i.imgur.com/BC3IZdk.png',
      'http://i.imgur.com/qpsmYb2.png',
      'http://i.imgur.com/fecfAIl.png',
      'http://i.imgur.com/8mgmR9G.png',
      'http://i.imgur.com/BFj5pNQ.png',
      'http://i.imgur.com/S4MZX3o.png',
      'http://i.imgur.com/6hfIPKJ.png',
      'http://i.imgur.com/4ZRtCRR.png',
      'http://i.imgur.com/0sMC2Eh.png',
      'http://i.imgur.com/fEK8FWX.png',
      'http://i.imgur.com/RFG2Iis.png',
      'http://i.imgur.com/lt6s8lF.png',
      'http://i.imgur.com/l4Im9cq.png',
      'http://i.imgur.com/7yuRwb9.png',
      'http://i.imgur.com/2oYK7do.png',
      'http://i.imgur.com/Psoa73A.png',
      'http://i.imgur.com/DTqb36V.png',
      'http://i.imgur.com/yKnWuou.png',
      'http://i.imgur.com/owXO1RU.png',
      'http://i.imgur.com/egGEIJw.png',
      'http://i.imgur.com/hTT1xrX.png',
      'http://i.imgur.com/RCi6lSg.png',
      'http://i.imgur.com/1NXMCz0.png',
      'http://i.imgur.com/CkvjSH2.png',
      'http://i.imgur.com/ZAKwfbE.png',
      'http://i.imgur.com/beUZfjP.png',
      'http://i.imgur.com/3eRNilz.png',
      'http://i.imgur.com/Z41BwVw.png',
      'http://i.imgur.com/Fq3BOKW.png',
      'http://i.imgur.com/6xuf5bg.png',
      'http://i.imgur.com/UpdrWUT.png',
      'http://i.imgur.com/yVOYMtE.png',
      'http://i.imgur.com/5agWCQf.png',
      'http://i.imgur.com/dnmnZKm.png',
      'http://i.imgur.com/d04VVLH.png',
      'http://i.imgur.com/Fhf4BLS.png',
      'http://i.imgur.com/O3yBWi6.png',
      'http://i.imgur.com/OWCkKMl.png',
      'http://i.imgur.com/C2q5p1C.png',
      'http://i.imgur.com/FaMyC0N.png',
      'http://i.imgur.com/LHSBe8e.png',
      'http://i.imgur.com/j9l6JRL.png',
      'http://i.imgur.com/tRa7C6K.png',
      'http://i.imgur.com/aBEFksU.png',
      'http://i.imgur.com/bRlXWuF.png',
      'http://i.imgur.com/ZCf9ERa.png',
      'http://i.imgur.com/RQAUG6r.png',
      'https://i.imgur.com/fiixP08.png',
      'http://i.imgur.com/rNFhCqJ.png',
      'http://i.imgur.com/WX3GUhN.png',
      'http://i.imgur.com/AUTPQav.png',
      'http://i.imgur.com/6uMMH4R.png',
      'http://i.imgur.com/Tg59zKf.png',
      'http://i.imgur.com/gumy2Bj.png',
      'http://i.imgur.com/TdgsKz9.png',
      'http://i.imgur.com/NCuegTf.png',
      'http://i.imgur.com/YncJS5r.png',
      'http://i.imgur.com/V94LYfU.png'
    ];

    // Do nothing!
    callback(comments[Math.floor(Math.random() * comments.length)]);
  }

  module.exports = {
    pattern: /^(?:comenta)|(?:comentar)|(?:vai dizer)|(?:diria).*$/,
    handler: comenta,
    description: '*silviao comenta*: Just ignores this command, since it\'s handled by Slackbot',
    channels: undefined
  };

})();
