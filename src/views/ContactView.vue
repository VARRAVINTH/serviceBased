<template>
<div class="contact container mx-auto my-8 p-4 bg-blue-200 rounded-lg">
<div class=" text-center">
    <h2 class=" text-2xl font-semibold mb-2">Contact Us</h2>
</div>
<div class="flex flex-col md:flex-row mt-6">
    <div class=" md:w-1/2 p-4"> 
    <img src="https://www.w3schools.com/w3images/map.jpg" alt="Map" class=" w-full rounded-md">
    </div>
    <div class=" md:w-1/2 p-4">
    <label for="fname" class=" block text-gray-700 flex ">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name..." class=" w-full p-2 border border-gray-300 rounded mt-2 mb-4">
   
   <label for="lname" class=" block text-gray-700 flex">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name..." class=" w-full p-2 border border-gray-300 rounded mt-2 mb-4">   
    
    <label for="state" class=" block text-gray-700 flex">State</label>
    <select name="state" id="state" class=" w-full p-2 border border-gray-300 rounded mt-2 mb-4">
        <option value="Andhra Pradesh">Andhra Pradesh</option>
        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
        <option value="Assam">Assam</option>
        <option value="Bihar">Bihar</option>
        <option value="Chhattisgarh">Chhattisgarh</option>
        <option value="Goa">Goa</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Haryana">Haryana</option>
        <option value="Himachal Pradesh">Himachal Pradesh</option>
        <option value="Jharkhand">Jharkhand</option>
        <option value="Karnataka">Karnataka</option>
        <option value="Kerala">Kerala</option>
        <option value="Madhya Pradesh">Madhya Pradesh</option>
        <option value="Maharashtra">Maharashtra</option>
        <option value="Manipur">Manipur</option>
        <option value="Meghalaya">Meghalaya</option>
        <option value="Mizoram">Mizoram</option>
        <option value="Nagaland">Nagaland</option>
        <option value="Odisha">Odisha</option>
        <option value="Punjab">Punjab</option>
        <option value="Rajasthan">Rajasthan</option>
        <option value="Sikkim">Sikkim</option>
        <option value="Tamil Nadu">Tamil Nadu</option>
        <option value="Telangana">Telangana</option>
        <option value="Tripura">Tripura</option>
        <option value="Uttar Pradesh">Uttar Pradesh</option>
        <option value="Uttarakhand">Uttarakhand</option>
        <option value="West Bengal">West Bengal</option>
    </select>
     <label for="subject" class=" block flex">Subject</label>
     <textarea name="subject" id="subject" cols="30" rows="10" placeholder="write something.." class=" w-full p-2 border border-gray-300 rounded mt-2 mb-4" style=" height:170px"></textarea>
      
      <input type="submit" value="submit" class=" w-full bg-blue-400 text-black p-2 rounded cursor-pointer hover:bg-blue-500 ">

    </div>
</div>
</div>
  
</template>

<script>
export default {

}
</script>

<style>

</style>