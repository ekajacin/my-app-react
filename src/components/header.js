import React from 'react'
class Header extends React.Component{
    render() {
        return(
            <div class="navbar">
            <div class="navbar-div">
                <div class="navbar-div-div">
                    <a href="/">Home</a>
                </div>
                <div class="navbar-div-div">
                    <a href="#">About</a>
                </div>
                <div class="navbar-div-div">
                        <ul class="navbar1">
                          <li class="dropdown">
                            <a href="#">Tools &#9662;</a>
                            <ul class="dropdown-menu">
                              <div class="dropdown-menu-list">
                                <li><a href="/resizeImage">Convert Image</a></li>
                              </div>
                              <div class="dropdown-menu-list">
                                <li><a href="/resizeAudio">Convert Audio</a></li>
                              </div>
                              <div class="dropdown-menu-list">
                                <li><a href="#">Convert Video</a></li>
                              </div>
                            </ul>
                          </li>
                        </ul>
                </div>
            </div>
        </div>
        );
    }
}
export default Header;