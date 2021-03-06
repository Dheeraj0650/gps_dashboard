import './projects.css';

export default function(){
    return (
      <div class="" style = {{margin:"0px"}}>
          <div class="d-flex justify-content-center row">
              <div class="feed p-2">
                  <div class="bg-white border mt-2">
                      <div>
                          <div class="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
                              <div class="d-flex flex-row align-items-center feed-text px-2"><img class="rounded-circle" src="https://i.imgur.com/aoKusnD.jpg" width="45"></img>
                                  <div class="d-flex flex-column flex-wrap ml-2"><span class="font-weight-bold">Thomson ben</span><span class="text-black-50 time">40 minutes ago</span></div>
                              </div>
                              <div class="feed-icon px-2"><i class="fa fa-ellipsis-v text-black-50"></i></div>
                          </div>
                      </div>
                      <div class="p-2 px-3"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
                      <div class="d-flex justify-content-end socials p-2 py-3"><i class="fa fa-thumbs-up"></i><i class="fa fa-comments-o"></i><i class="fa fa-share"></i></div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
