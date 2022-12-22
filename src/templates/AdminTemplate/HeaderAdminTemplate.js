import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SHOW_MENU_ADMIN } from "../../redux/types/MenuAdminType";

export default function HeaderAdminTemplate(props) {
  const {btnMenu} = useSelector(state => state.MenuAdminReducer)
  const dispatch = useDispatch()

  const [navMenuShow, setNavMenuShow] = useState(false);
  const [menuShow, setMenuShow] = useState("");
  const [btnOpenUserInfo, setBtnOpenUserInfo] = useState(false)
  const [openUserInfo, setOpenUserInfo] = useState('')
  const [btnOpenUserOnline, setBtnOpenUserOnline] = useState(false)
  const [openUserOnline, setOpenUserOnline] = useState('')
  const [btnOpenLanguage, setBtnOpenLanguage] = useState(false)
  const [openLanguage, setOpenLanguage] = useState('')
  const [btnOpenNotification, setBtnOpenNotification] = useState(false)
  const [openNotification, setOpenNotification] = useState('')
  const [btnOpenDashBoard, setBtnOpenDashBoard] = useState(false)
  const [openDashBoard, setOpenDashBoard] = useState('')

  const [btnOpenSearch, setBtnOpenSearch] = useState(false)
  const [openSearchInput, setOpenSearchInput] = useState('')
  const [openSearchHeaderMenu, setOpenSearchHeaderMenu] = useState('')
  const [openSearchBtnSearch, setOpenSearchBtnSearch] = useState('')
  const [openSearchClose, setOpenSearchClose] = useState('')
  const [openSearchHeaderMenuLeft, setOpenSearchHeaderMenuLeft] = useState('')


  return (
    <header className="headerAdmin" id="headerAdmin">
      <nav>
        <div className="headerAdmin__toggle btn">
          <i className="ri-menu-line" onClick={() => {
            dispatch({
              type: SHOW_MENU_ADMIN
            })
          }}></i>
        </div>
        <div className="headerAdmin__logo">Admin</div>
        <div className="headerAdmin__menu">
          <div className={`headerAdmin__menu--list ${menuShow} ${openSearchHeaderMenu}`} id="nav-menu">
            <div className={`headerAdmin__menu--left ${openSearchHeaderMenuLeft}`}>
              <i className={`ri-search-line btn ${openSearchBtnSearch}`} onClick={() => {
                setBtnOpenSearch(true)
                if(!btnOpenSearch){
                  setOpenSearchInput('show-search__input')
                  setOpenSearchHeaderMenu('show-search__headerMenu')
                  setOpenSearchBtnSearch('show-search__btnSearch')
                  setOpenSearchClose('show-search__close')
                  setOpenSearchHeaderMenuLeft('show-search__headerMenuLeft')
                }

              }}></i>
              <input placeholder="Search" className={`${openSearchInput}`}/>
            </div>

            <i className={`ri-close-line btn ${openSearchClose}`} onClick={() => {
              setBtnOpenSearch(false)
              if(btnOpenSearch){
                setOpenSearchInput('')
                setOpenSearchHeaderMenu('')
                setOpenSearchBtnSearch('')
                setOpenSearchClose('')
                setOpenSearchHeaderMenuLeft('')
                
                // -- set user info --               
                setBtnOpenUserInfo(false)
                setOpenUserInfo('')

                // -- set user Online --               
                setBtnOpenUserOnline(false)
                setOpenUserOnline('')

                // -- set language --               
                setBtnOpenLanguage(false)
                setOpenLanguage('')

                // -- set notification --               
                setBtnOpenNotification(false)
                setOpenNotification('')

                // -- set dashBoard --
                setBtnOpenDashBoard(false)
                setOpenDashBoard('')
              }
            }}></i>

            <div className="headerAdmin__menu--right">
              <i className="ri-function-line btn" onClick={() => {
                setBtnOpenDashBoard(!btnOpenDashBoard)
                if(!btnOpenDashBoard){
                  setOpenDashBoard('show-dashBoard')

                  // sel close userInfo, userOnline, language, notification
                  setBtnOpenUserInfo(false)
                  setOpenUserInfo('')

                  setBtnOpenUserOnline(false)
                  setOpenUserOnline('')

                  setBtnOpenLanguage(false)
                  setOpenLanguage('')

                  setBtnOpenNotification(false)
                  setOpenNotification('')
                }else{
                  setOpenDashBoard('')
                }
              }}></i>
              <i className="ri-notification-4-line btn" onClick={() => {
                setBtnOpenNotification(!btnOpenNotification)
                if(!btnOpenNotification){
                  setOpenNotification('show-notification')

                  // set close openUserInfo, userOnline, language, dashBoard
                  setBtnOpenUserInfo(false)
                  setOpenUserInfo('')

                  setBtnOpenUserOnline(false)
                  setOpenUserOnline('')

                  setBtnOpenLanguage(false)
                  setOpenLanguage('')

                  setBtnOpenDashBoard(false)
                  setOpenDashBoard('')
                }else{
                  setOpenNotification('')
                }
              }}></i>
              <i className="ri-flag-line btn" onClick={() => {
                setBtnOpenLanguage(!btnOpenLanguage)
                if(!btnOpenLanguage){
                  setOpenLanguage('show-language')

                  // set close user info, user Online, notification, dashBoard
                  setBtnOpenUserInfo(false)
                  setOpenUserInfo('')

                  setBtnOpenUserOnline(false)
                  setOpenUserOnline('')

                  setBtnOpenNotification(false)
                  setOpenNotification('')

                  setBtnOpenDashBoard(false)
                  setOpenDashBoard('')
                }else{
                  setOpenLanguage('')
                }
              }}></i>
              <i className="ri-landscape-line btn" onClick={() => {
                setBtnOpenUserOnline(!btnOpenUserOnline)
                if(!btnOpenUserOnline){
                  setOpenUserOnline('show-userOnline')

                  // set close user info, languege, notification, dashBoard
                  setBtnOpenUserInfo(false)
                  setOpenUserInfo('')

                  setBtnOpenLanguage(false)
                  setOpenLanguage('')

                  setBtnOpenNotification(false)
                  setOpenNotification('')

                  setBtnOpenDashBoard(false)
                  setOpenDashBoard('')
                }else{
                  setOpenUserOnline('')
                }
              }}></i>
              <div className="userInfo btn" onClick={() => {

                setBtnOpenUserInfo(!btnOpenUserInfo)
                
                if (!btnOpenUserInfo) {
                  setOpenUserInfo("show-userInfo");

                  // set close user online, language, nitification, dashBoard
                  setBtnOpenUserOnline(false)
                  setOpenUserOnline('')

                  setBtnOpenLanguage(false)
                  setOpenLanguage('')

                  setBtnOpenNotification(false)
                  setOpenNotification('')

                  setBtnOpenDashBoard(false)
                  setOpenDashBoard('')
                } else {
                  setOpenUserInfo("");                
                }

              }}>
                <img src="https://picsum.photos/40" alt="avatar" />
                <i className="ri-arrow-down-s-line"></i>
              </div>
            </div>

            <div className={`userInfo-short ${openDashBoard}`}>
              <div className="userInfo-short__header">
                <img src="https://picsum.photos/40" alt="avatar" />
                <div className="userInfo-short__header--content">
                  <p>Dash Board</p>
                  <p>A short profile description</p>
                </div>
                <button className="btn btn--logOut">Logout</button>
              </div>

              <div className="userInfo-short__content">
                <ul>
                  <li>Activity</li>

                  <li>
                    <a href="#">Chat</a>
                  </li>

                  <li>
                    <a href="#">Recover Password</a>
                  </li>

                  <li>My Account</li>
                </ul>
              </div>

              <div className="userInfo-short__active">
                <div className="userInfo-short__activeItem">
                  
                    <button className="btn message--inbox">
                    Message Inbox
                    </button>
                </div>
                <div className="userInfo-short__activeItem">
                    <button className="btn support--ticket">
                    Support Tickets
                    </button>
                </div>
                <div className="userInfo-short__activeItem">
                    <button className="btn open--message">
                    Open Message
                    </button>
                </div>
              </div>

            </div> 

            <div className={`userInfo-short ${openNotification}`}>
              <div className="userInfo-short__header">
                <img src="https://picsum.photos/40" alt="avatar" />
                <div className="userInfo-short__header--content">
                  <p>Notification</p>
                  <p>A short profile description</p>
                </div>
                <button className="btn btn--logOut">Logout</button>
              </div>

              <div className="userInfo-short__content">
                <ul>
                  <li>Activity</li>

                  <li>
                    <a href="#">Chat</a>
                  </li>

                  <li>
                    <a href="#">Recover Password</a>
                  </li>

                  <li>My Account</li>
                </ul>
              </div>

              <div className="userInfo-short__active">
                <div className="userInfo-short__activeItem">
                  
                    <button className="btn message--inbox">
                    Message Inbox
                    </button>
                </div>
                <div className="userInfo-short__activeItem">
                    <button className="btn support--ticket">
                    Support Tickets
                    </button>
                </div>
                <div className="userInfo-short__activeItem">
                    <button className="btn open--message">
                    Open Message
                    </button>
                </div>
              </div>

            </div> 

            <div className={`userInfo-short ${openLanguage}`}>
              <div className="userInfo-short__header">
                <img src="https://picsum.photos/40" alt="avatar" />
                <div className="userInfo-short__header--content">
                  <p>Language</p>
                  <p>A short profile description</p>
                </div>
                <button className="btn btn--logOut">Logout</button>
              </div>

              <div className="userInfo-short__content">
                <ul>
                  <li>Activity</li>

                  <li>
                    <a href="#">Chat</a>
                  </li>

                  <li>
                    <a href="#">Recover Password</a>
                  </li>

                  <li>My Account</li>
                </ul>
              </div>

              <div className="userInfo-short__active">
                <div className="userInfo-short__activeItem">
                  
                    <button className="btn message--inbox">
                    Message Inbox
                    </button>
                </div>
                <div className="userInfo-short__activeItem">
                    <button className="btn support--ticket">
                    Support Tickets
                    </button>
                </div>
                <div className="userInfo-short__activeItem">
                    <button className="btn open--message">
                    Open Message
                    </button>
                </div>
              </div>

            </div> 

            <div className={`userInfo-short ${openUserOnline}`}>
              <div className="userInfo-short__header">
                <img src="https://picsum.photos/40" alt="avatar" />
                <div className="userInfo-short__header--content">
                  <p>User Online</p>
                  <p>A short profile description</p>
                </div>
                <button className="btn btn--logOut">Logout</button>
              </div>

              <div className="userInfo-short__content">
                <ul>
                  <li>Activity</li>

                  <li>
                    <a href="#">Chat</a>
                  </li>

                  <li>
                    <a href="#">Recover Password</a>
                  </li>

                  <li>My Account</li>
                </ul>
              </div>

              <div className="userInfo-short__active">
                <div className="userInfo-short__activeItem">
                  
                    <button className="btn message--inbox">
                    Message Inbox
                    </button>
                </div>
                <div className="userInfo-short__activeItem">
                    <button className="btn support--ticket">
                    Support Tickets
                    </button>
                </div>
                <div className="userInfo-short__activeItem">
                    <button className="btn open--message">
                    Open Message
                    </button>
                </div>
              </div>

            </div>
              
            <div className={`userInfo-short ${openUserInfo}`}>
              <div className="userInfo-short__header">
                <img src="https://picsum.photos/40" alt="avatar" />
                <div className="userInfo-short__header--content">
                  <p>Name</p>
                  <p>A short profile description</p>
                </div>
                <button className="btn btn--logOut">Logout</button>
              </div>

              <div className="userInfo-short__content">
                <ul>
                  <li>Activity</li>

                  <li>
                    <a href="#">Chat</a>
                  </li>

                  <li>
                    <a href="#">Recover Password</a>
                  </li>

                  <li>My Account</li>
                </ul>
              </div>

              <div className="userInfo-short__active">
                <div className="userInfo-short__activeItem">
                  
                    <button className="btn message--inbox">
                    Message Inbox
                    </button>
                </div>
                <div className="userInfo-short__activeItem">
                    <button className="btn support--ticket">
                    Support Tickets
                    </button>
                </div>
                <div className="userInfo-short__activeItem">
                    <button className="btn open--message">
                    Open Message
                    </button>
                </div>
              </div>

            </div>  

            

          </div>

          <i
            className="ri-menu-4-line btn"
            id="nav-btn-menu"
            onClick={() => {
              if (!navMenuShow) {
                setMenuShow("show-menu");
              } else {
                setMenuShow("");
                
                // -- set user info --               
                setBtnOpenUserInfo(false)
                setOpenUserInfo('')

                // -- set user Online --               
                setBtnOpenUserOnline(false)
                setOpenUserOnline('')

                // -- set language --               
                setBtnOpenLanguage(false)
                setOpenLanguage('')

                // -- set notification --               
                setBtnOpenNotification(false)
                setOpenNotification('')

                // -- set dashBoard --
                setBtnOpenDashBoard(false)
                setOpenDashBoard('')

                // -- set open search --
                setBtnOpenSearch(false)
                setOpenSearchInput('') 
                setOpenSearchHeaderMenu('') 
                setOpenSearchBtnSearch('') 
                setOpenSearchClose('') 
                setOpenSearchHeaderMenuLeft('')
              }
              setNavMenuShow(!navMenuShow);
            }}
          ></i>
        </div>
      </nav>
    </header>
  );
}
