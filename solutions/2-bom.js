// BEGIN
const traverse = (link) => {
    let browserInfo = navigator.userAgent.split(" ")[0] + ' ' + link;
    window.location.href = link;
    return browserInfo;
}
export default traverse;
// END