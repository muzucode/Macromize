<template>
  <div class="container-md mb-4 p-3 rounded bg-white shadow">
      <div class="row my-2 text-left"><h2 class="trainer-name">Sean Hickey <span class="certs">(CPT, ACE)</span></h2></div>
      <div class="row p-3 ">
        <div class="col-3"><img id="profileImg" class="img-fluid border border-secondary" src="https://2mhysdb906v0sbr2s3cus12x-wpengine.netdna-ssl.com/wp-content/uploads/2019/01/Profile_Feature.png"/></div>
        <div class="col-6 description p-3">Lorem ipsum doin voluptate velit esse cilluulpa qui officia deserunt mollit anim id est laborum.</div>
        <div class="col-3">
            <button id="btn-contact" class="btn mb-2  w-100">Contact</button>
            <button id="btn-review" class="btn btn-secondary mb-2 w-100">Reviews</button>
            <button id="btn-leavereview" class="btn w-100">Leave a review</button>
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
#btn-contact {
  background-color: #6C7AFD;
  color:white;
}
.description {
  background-color: #f6f6f6;
  font-family: 'Raleway', sans-serif;
}
button {
  font-family: 'Staatliches', cursive;
}
#btn-leavereview {
  background-color: #060e55;
  color:white;
}
</style>