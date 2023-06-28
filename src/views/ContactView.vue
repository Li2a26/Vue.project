<template>
  <form action="https://formspree.io/f/xoqzganj" method="POST">
    <div class="col-md-4 m-auto">
      <div class="form-floating animate__animated animate__zoomIn">
        <input
          type="name"
          name="name"
          class="form-control"
          id="floatingInputGrid"
          placeholder="Name"
        />
        <label for="floatingInputGrid">Enter Your Name</label>
      </div>
    </div>
    <p></p>
    <div class="col-md-4 m-auto animate__animated animate__zoomIn">
      <div class="form-floating">
        <input
          type="email"
          name="email"
          class="form-control"
          id="floatingInputGrid"
          placeholder="laeeq.majal@gmail.com"
          required
        />
        <label for="floatingInputGrid">Email address</label>
      </div>
    </div>
    <p></p>
    <div class="col-md-4 m-auto animate__animated animate__zoomIn">
      <div class="form-floating">
        <textarea
          name="message"
          class="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style="height: 100px"
          required
        ></textarea>
        <label for="floatingTextarea2">Comments</label>
      </div>
    </div>
    <p></p>
    <div class="col-md-4 m-auto animate__animated animate__zoomIn">
      <button type="submit" class="btn1">Submit</button>
    </div>
  </form>
  <br />
</template>

<script>
export default {};
</script>
<style>
.btn1 {
  border-radius: 5px !important;
  border-color: antiquewhite;
  background-color: lightpink;
  border-color: lightcoral 10px;
  margin: 12px;
  height: 50px;
  width: 120px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  box-shadow: -5px -5px 15px antiquewhite, 5px 5px 15px antiquewhite,
    inset 5px 5px 10px antiquewhite, inset -5px -5px 10px lightcoral;
  font-family: "Damion", cursive;
  border: none;
  font-size: 16px;
  color: black;
  transition: 500ms;
}
.btn1:hover {
  box-shadow: -5px -5px 15px antiquewhite, 5px 5px 15px antiquewhite,
    inset 5px 5px 10px lightcoral, inset -5px -5px 10px lightcoral;
  color: black;
  transition: 500ms;
}
form {
  background-image: url(https://i.postimg.cc/g229vXsp/concelaor.png);
}
.form-control {
  background-color: antiquewhite;
  border-radius: 10px;
  border-color: lightpink;
}
.form-control:hover {
  background-color: lightpink;
}
</style>