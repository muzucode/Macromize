<template>
  <div class="container-md mb-4 p-3 rounded bg-white shadow">
      <div class="row my-2 text-left"><h2 class="trainer-name">
        <!-- Coach name slot -->
        <slot name="coach-name"></slot>
        <span class="certs">  (CPT, ACE)</span></h2></div>
      <div class="row p-3 ">
        <div class="col col-3"><img id="profileImg" class="img-fluid" src="https://assets.website-files.com/5bee2dee67d34caed2a30658/5bf358d54414ed3e8438857e_Personal%20Trainer%20copy.jpg"/></div>
        <div class="col col-7 description p-3">Lorem ipsum doin voluptate velit esse cilluulpa qui officia deserunt mollit anim id est laborum.</div>
        <div class="col col-2">
            <!-- Button coaches slot -->
            <slot name="btn-coaches"></slot>
        </div>      
      </div>

  </div>
</template>

<script>
export default {
  name: 'Coach Card',
  data: function () {
    return {
      
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');

.trainer-name {
  font-family: 'Raleway', sans-serif;
}
.certs {
  color:rgb(190, 190, 190);
}
#profileImg {

}
#btn-connect {
  background-color: #4d7e50;
  color:white;
  font-family: 'Staatliches', cursive;
}
.description {
  background-color: #f6f6f6;
  font-family: 'Raleway', sans-serif;
}
#btn-leavereview {
  background-color: #474d83;
  color:white;
  font-family: 'Staatliches', cursive;
}
#btn-reviews {
  color:white;
  font-family: 'Staatliches', cursive;
}
</style>