import React, {Component} from "react";
import logo from "../search.svg";
import "./searchbox.css";
import classNames from "classnames";
class Searchbox extends Component{
  constructor(props){
    super(props);
    this.state = {
      isFocused: false
    };
  }
  changeInputValue(e) {
    this.setState({
      "isFocused": true
    });

  }
    submitForm(e) {
      //Chặn các event mặc định của form
      e.preventDefault();
   
     //Gọi hàm validationForm() dùng để kiểm tra form
      // const validation = this.validationForm()
   
      // //Kiểm tra lỗi của input trong form và hiển thị
      // if (validation.error) {
      //   alert(validation.msg)
      // }else{
      //   alert('Submit form success')
      // }
    }
    // validationForm() {
    //   let returnData = {
    //     error : false,
    //     msg: ''
    //   }
    //   const {search} = this.state
    //   return returnData;
    // }
    render(){
        return (
            <div className="searchbox">
              <form
                    onSubmit={e => {
                        this.submitForm(e);}}>
            <input
              type="text"
              name="isFocus"
              placeholder="Enter Somethings..."
              onFocus={(e) => this.changeInputValue(e)}
            />
          <span>
          <button type="submit" className={classNames({"btn-hidden":this.state.isFocused===true})}>
            <img src={logo} alt="s" className="searchbtn"/>
          </button>
          </span>
        </form>
        
      </div>
    );
  }
}
export default Searchbox;