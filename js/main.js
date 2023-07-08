document.getElementById("header").innerHTML=`<nav class="navbar navbar-expand-sm navbar-light bg-light">
<div class="container">

  <a class="navbar-brand" href="#"> U2nav </a>

  <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="collapsibleNavId">
      <ul class="navbar-nav me-auto mt-2 mt-lg-0">
          <li class="nav-item">
              <a class="nav-link active" href="#" aria-current="page"> U2home <span class="visually-hidden">(current)</span></a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#"> U2links </a>
          </li>
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">U2</a>
              <div class="dropdown-menu" aria-labelledby="dropdownId">
                  <a class="dropdown-item" href="albums.html"> Albums </a>
                  <a class="dropdown-item" href="singles.html"> Singles </a>
              </div>
          </li>
      </ul>
      <form class="d-flex my-2 my-lg-0">
          <input class="form-control me-sm-2" type="text" placeholder="U2search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit"> U2search </button>
      </form>
  </div>
  
</div>
</nav>`