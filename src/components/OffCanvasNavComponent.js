function OffCanvasNavComponent() {
    return (
      <div  className="d-flex  flex-column flex-shrink-0 vh-100 p-3 m-0">
        <div className=''>
          <a href="/" className=" text-center d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <i style={{fontSize:"10em"}} class="bi w-100  bi-person-circle"/>
          </a>
        </div>
        <h6 className=" text-center">DriveSmart</h6>
        <hr/>
        <ul className="nav nav-pills flex-column mb-auto">
          <span className=' text-info' >MAIN MENU</span>
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              <i class="bi bi-speedometer2 pe-2"></i>
              Admin-Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-dark">
              <i class="bi bi-mortarboard pe-2"></i>
              Study Materials
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-dark">
              <i class="bi bi-file-person pe-2"></i>
              User Management
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-dark">
              <i class="bi bi-chat-left pe-2"></i>
              Customer Support
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-dark">
              <i class="bi bi-credit-card pe-2"></i>
              Reports
            </a>
          </li>
        </ul>
  
        <hr/>
        <ul className="nav nav-pills flex-column mb-auto">
          <span className=' text-info' >PREFERENCE</span>
          <li className="nav-item">
            <a href="#" className="nav-link text-dark" aria-current="page">
              <i class="bi bi-gear pe-2"></i>
              Settings
            </a>
          </li>
        </ul>
        <hr/>
      </div>
    )
  }
  
  export default OffCanvasNavComponent