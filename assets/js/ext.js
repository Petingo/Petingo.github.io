// https://typeitjs.com/
new TypeIt("#typeit-block", {
    string: "",
    speed: 90,
    delay: 700,
    loop: true
})
    .type("<span style='color: #F17C67'>Computer Vision</span>", {delay: 700})
    .delete(16)
    .type("<span style='color: #BEC23F'>Photography</span>", {delay: 700})
    .delete(16)
    .type("<span style='color: #0089A7'>Digital Fabrication</span>", {delay: 700})
    .go();