import moment from 'moment';

const getCurrentDate = function() {
    const wrapped = moment(new Date());
    console.log(wrapped.format());  // Format the date to a readable string
}

getCurrentDate();
