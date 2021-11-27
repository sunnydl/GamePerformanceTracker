/**
 * Utility function used to convert Unix time stamp to normal time format
 *
 * @param {number} UNIX_timestamp The Unix time stamp
 * @return {string} The normal format of time
 */
export function timeConverter(UNIX_timestamp: number){
    var a = new Date(UNIX_timestamp);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = date + ' ' + month + ' ' + year;
    return time;
}
