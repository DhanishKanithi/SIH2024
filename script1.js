const districts_list = ['Mumbai', 'New Delhi', 'Ahmedabad'];
const current_district = districts_list[0]; 
const pending_application = 20; 
const progress_application = 10;
const completed_application = 30;
const total_application = pending_application+progress_application+completed_application; 

const district_name = document.getElementsByClassName('text-xl');
district_name[0].innerText =`${current_district}'S REVENUE DEPARTMENT`;

const hover_elements = document.getElementsByClassName('hover_events_class');


