import React from 'react';

class Team extends React.Component{
    render(){
        return(
            <div className="team_area">
            <div class="container">
  <div class="row">

      <div className="col-6 col-md-4">
     <div class="card" style={{width: '18rem',  marginTop: '4%', marginBottom: '3%'}}>
         <div className="work-overlay">
             <div class='image_info' style={{  backgroundImage: `url("./assets/img/team/Baratov.jpg")`}}>
                 <div className="block_2">
                     <p>Илимжан Баратов</p>
                 </div>

             </div>
         </div>
</div>
    </div>
      <div className="col-6 col-md-4">
          <div className="card" style={{width: '18rem', marginTop: '4%', marginBottom: '3%'}}>
              <div className="work-overlay">
                  <div className='image_info' style={{backgroundImage: `url("./assets/img/team/Nura.jpg")`}}>
                      <div className="block_2">
                          <p>Оразбаева Нургуль
</p>
                      </div>

                  </div>
              </div>
          </div>
      </div>
      <div className="col-6 col-md-4">
     <div className="card" style={{width: '18rem', marginTop: '4%', marginBottom: '3%'}}>
              <div className="work-overlay">
                  <div className='image_info' style={{backgroundImage: `url("./assets/img/team/Nura.jpg")`}}>
                      <div className="block_2">
                          <p>Оразбаева Нургуль
</p>
                      </div>

                  </div>
              </div>
          </div>
    </div>
      <div className="col-6 col-md-4">

      <div className="card" style={{width: '18rem', marginTop: '4%', marginBottom: '3%'}}>
              <div className="work-overlay">
                  <div className='image_info' style={{backgroundImage: `url("./assets/img/team/Nura.jpg")`}}>
                      <div className="block_2">
                          <p>Оразбаева Нургуль
</p>
                      </div>

                  </div>
              </div>
          </div>
    </div>
  </div>

</div>
                </div>

        );
    }
}

export default Team;