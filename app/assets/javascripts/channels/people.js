/* global Vue */
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Most Interesting People',
      people: [
        {name: "Lin-Manual Miranda", bio: "Hamilton Dude", submittedBy:"J.J.",bioVisible:false},
        {name: "Kip Thorne", bio: "Space Dude", submittedBy: "Christoper",bioVisible:false},
        {name: "Gene Slueth", bio: "D.N.A. Chick", submittedBy: "Jennifer",bioVisible:false}
      ],
      newPersonName: "",
      newPersonBio: "",
      newPersonSubmittedBy: ""
      
    },
    methods:{
      toggleBio: function(inputPerson) {
        inputPerson.bioVisible = !inputPerson.bioVisible;
      },
      addPerson:function() {
        this.people.push({name: this.newPersonName, bio: this.newPersonBio,submittedBy:this.newPersonSubmittedBy});
        this.newPersonName = "";
        this.newPersonBio = "";
        this.newPersonSubmittedBy = "";
      },
      deletePerson: function(inputPerson) {
        var index = this.person.indexOf(inputPerson);
        this.person.splice(index,1);
      }
    }
  });
});
