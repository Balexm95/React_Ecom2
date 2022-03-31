import React from 'react'

 const Contact = () => {
  return (
   
    <div class="testbox">
      <form action="/">
        <h1>Leave Us Feedback</h1>
        <h4>Type of Feedback<span>*</span></h4>
        <select>
          <option value=""></option>
          <option value="">Inquiry</option>
          <option value="2">Complaint</option>
          <option value="3">Compliment</option>
          <option value="4">Suggestion</option>
        </select>
        <h4>Feedback/Inquiry on<span>*</span></h4>
        <select>
          <option value=""></option>
          <option value="1">Inventory</option>
          <option value="2">Shipping Process</option>
          <option value="3">Issues with the Site</option>
          <option value="4">Product Details</option>
          <option value="5">Other</option>
        </select>
        <h4>Name<span>*</span></h4>
        <div class="title-block">
          <select>
            <option value="title" selected>Title</option>
            <option value="ms">Ms</option>
            <option value="miss">Miss</option>
            <option value="mrs">Mrs</option>
            <option value="mr">Mr</option>
          </select>
          <input class="name" type="text" name="name" placeholder="First" />
          <input class="name" type="text" name="name" placeholder="Last" />
        </div>
        <h4>Email Address<span>*</span></h4>
        <input type="text" name="name" />
        <h4>Contact Number<span>*</span></h4>
        <input type="text" name="name" placeholder="(000-000-000)"/>
        <h4>Feedback/Inquiry</h4>
          <textarea rows="5"></textarea>
        <div class="btn-block">
          <button type="submit" href="/">Send Feedback</button>
        </div>
      </form>
    </div>
  )
}

export default Contact;