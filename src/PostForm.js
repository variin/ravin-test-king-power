import React, { Component } from 'react'
import { connect } from 'react-redux';
import {AutoTabProvider} from 'react-auto-tab'
class PostForm extends Component {
  
    handleSubmit = (e) =>{
        e.preventDefault();
        const title = this.getTitle.value;
        const fname = this.getFname.value;
        const lname = this.getLname.value;
        const birthday = this.getBirthday.value;
        const nationality = this.getNationality.value;
        const citizenID = this.getCitizenID.value;
        const gender = this.getGender.value;
        const mobilePhone = this.getMobilePhone.value;
        const passportNo = this.getPassportNo.value;
        const expectedSalary = this.getExpectedSalary.value;
        const data = {
            id: new Date(),
            title,
            fname,
            lname,
            birthday,
            nationality,
            citizenID,
            gender,
            mobilePhone,
            passportNo,
            expectedSalary,
            editing: false
        }
        this.props.dispatch({
            type:'ADD_POST',
            data
        })
        this.getTitle.value = "";
        this.getFname.value = "";
        this.getLname.value ="";
        this.getBirthday.value ="";
        this.getNationality.value ="";
        this.getCitizenID.value ="";
        this.getGender.value ="";
        this.getMobilePhone.value ="";
        this.getPassportNo.value ="";
        this.getExpectedSalary.value ="";

        console.log('data', data)
    }

  render() {
    return (
      <div className='post-container'>
          <form className='form' onSubmit={this.handleSubmit}>
            <div className='form_group'> 
              <div className='selectbox_form'> 
                <label>Title * : </label>
                <select className='selectbox' required ref={(input) => this.getTitle = input} >
                 <option value="Mr.">Mr.</option>
                 <option value="Ms.">Ms.</option>
                 <option value="Mrs.">Mrs.</option>
                </select>
              </div>
             
              <div className='text_form'>
                <label>First name * : </label>
                <input type="text" className='input_name' ref={(input) => this.getFname = input} required></input>
              </div>   

              <div className='text_form'>
                <label>Last name * : </label>
                <input type="text" className='input_name' ref={(input) => this.getLname = input} required></input>
              </div>  
            </div>

            <div className='form_group'>
              <div className='form_margin'>
                <label>Birthday * : </label>
                <input type="date" ref={(input) => this.getBirthday = input} required></input>
              </div>

              <div className='selectbox_form'>
                <label>Nationality : </label>
                <select className='selectbox_nationality' ref={(input) => this.getNationality = input}>
                 <option disabled selected value> -- Please Select -- </option>
                 <option value="Australian">Australian</option>
                 <option value="Korean">Korean</option>
                 <option value="Thai">Thai</option>
                </select>
              </div>
            </div>

            {/* <div className='text_form'>
                <label>Citizen ID : </label>
                <input className='input_salary' type="number" ref={(input) => this.getCitizenID = input} min="0" minLength="0" maxLength="13" step="1"></input>
            </div>    */}
            <AutoTabProvider>
             <label>Citizen ID : </label>
              <input className='input_citizen1' type="text" maxLength={1} tabbable />
              <span> - </span>
              <input className='input_citizen2' type="text" maxLength={4} tabbable />
              <span> - </span>
              <input className='input_citizen2' type="text" maxLength={5} tabbable />
              <span> - </span>
              <input className='input_citizen1' type="text" maxLength={2} tabbable />
              <span> - </span>
              <input className='input_citizen1' type="text" maxLength={1} tabbable />
            </AutoTabProvider>
            <div className='form_group'>
              <label className='gender'>Gender : </label>
              <div className='gender'>              
                <input type="radio" name="gender" value="male" ref={(input) => this.getGender = input}></input>
                <label className="radio"> Male</label>

                <input type="radio"name="gender" value="female"ref={(input) => this.getGender = input}></input>
                <label className="radio"> Female</label>

                <input type="radio"name="gender" value="unisex"ref={(input) => this.getGender = input}></input>
                <label className="radio"> Unisex</label>
              </div>
            </div>

            <div className='text_form'>
                <label>Mobile Phone * : </label>
                <input className='input_salary' type="number" ref={(input) => this.getMobilePhone = input} min="0" step="1" required></input>
            </div>   

            <div className='passport_form'>
                <label>Passport No : </label>
                <input type="text" ref={(input) => this.getPassportNo = input}></input>
              </div>   

              <div className='salary_form'>
                <label>Expected Salary * : </label>
                <input className='input_salary' type="number" ref={(input) => this.getExpectedSalary = input} min="0" step="1" required></input>
                <label className='THB_label'> THB</label>

                <button>Submit</button>
              </div>   

          </form>
      </div>
    )
  }
}

export default connect()(PostForm)