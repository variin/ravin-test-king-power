import React, { Component } from 'react'
import { connect } from 'react-redux';
import {AutoTabProvider} from 'react-auto-tab'

class EditComponent extends Component {

    handleEdit = (e) => {
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newFname = this.getFname.value;
        const newLname = this.getLname.value;
        const newBirthday = this.getBirthday.value;
        const newNationality = this.getNationality.value;
        const newCitizenID = this.getCitizenID.value;
        const newGender = this.newGender.value;
        const newMobilePhone = this.newMobilePhone.value;
        const newPassportNo = this.getPassportNo.value;
        const newExpectedSalary = this.getExpectedSalary.value;

        const data ={
            newTitle,
            newFname,
            newLname,
            newBirthday,
            newNationality,
            newCitizenID,
            newGender,
            newMobilePhone,
            newPassportNo,
            newExpectedSalary
        }
        this.props.dispatch({type: 'UPDATE', id: this.props.post.id, data: data})
    }

  render() {
    return (
      <div className='post-container'>
          <form className='form' onSubmit={this.handleEdit}>
              <div className='form_group'> 
                <div className='selectbox_form'> 
                  <label>Title * : </label>
                  <select className='selectbox' required ref={(input) => this.getTitle = input} defaultValue={this.props.post.title}>
                    <option value="Mr.">Mr.</option>
                    <option value="Ms.">Ms.</option>
                    <option value="Mrs.">Mrs.</option>
                  </select>
                </div>
             
                <div className='text_form'>
                  <label>First name * : </label>
                  <input type="text" ref={(input) => this.getFname = input} defaultValue={this.props.post.fname} required></input>
                </div>   

                <div className='text_form'>
                  <label>Last name * : </label>
                  <input type="text" ref={(input) => this.getLname = input} defaultValue={this.props.post.lname} required></input>
                </div>  
              </div>

              <div className='form_group'>
                <div className='form_margin'>
                  <label>Birthday * : </label>
                  <input type="date" ref={(input) => this.getBirthday = input} defaultValue={this.props.post.birthday}></input>
                </div>

               
                <div className='selectbox_form'>
                  <label>Nationality : </label>
                  <select className='selectbox_nationality' ref={(input) => this.getNationality = input} defaultValue={this.props.post.nationality}>
                    <option disabled selected value> -- Please Select -- </option>
                    <option value="Australian">Australian</option>
                    <option value="Korean">Korean</option>
                    <option value="Thai">Thai</option>
                </select>
                </div>
              </div>

              {/* <div className='text_form'>
                <label>Citizen ID : </label>
                <input className='input_salary' type="number" ref={(input) => this.getCitizenID = input} defaultValue={this.props.post.citizenID} min="0" step="1"></input>
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
                <input type="radio" name="gender" value="male" ref={(input) => this.getGender = input} checked={this.props.post.gender}></input>
                <label className="radio"> Male</label>

                <input type="radio"name="gender" value="female"ref={(input) => this.getGender = input} checked={this.props.post.gender}></input>
                <label className="radio"> Female</label>

                <input type="radio"name="gender" value="unisex"ref={(input) => this.getGender = input} checked={this.props.post.gender}></input>
                <label className="radio"> Unisex</label>
              </div>
            </div>

              <div className='text_form'>
                <label>Mobile Phone * : </label>
                <input className='input_salary' type="number" ref={(input) => this.getMobilePhone = input} defaultValue={this.props.post.mobilePhone} min="0" step="1" required></input>
              </div>   

              <div className='passport_form'>
                <label>Passport No : </label>
                <input type="text" ref={(input) => this.getPassportNo = input} defaultValue={this.props.post.passportNo}></input>
              </div>   

              <div className='salary_form'>
                <label>Expected Salary * : </label>
                <input className='input_salary' type="number" ref={(input) => this.getExpectedSalary = input} defaultValue={this.props.post.expectedSalary} required></input>
                <label className='THB_label'> THB</label>

                <button>Update</button>
              </div>   
          </form>
      </div>
    )
  }
}

export default connect()(EditComponent);
