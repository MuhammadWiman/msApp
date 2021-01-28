const converted = {
  "body, html": {
    width: "100%",
    height: "100%",
    padding: "0",
    margin: "0",
    overflow: "hidden"
  },
  body: {
    fontFamily:
      "'Segoe UI', Helvetica Nenu, Helvetica, 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
    backgroundImage: "linear-gradient(180deg, #dddbd1, #d2dbdc)"
  },
  ".top": {
    height: "130px",
    width: "100%",
    backgroundColor: "#009688",
    position: "fixed",
    zIndex: -1
  },
  ".chatbox": {
    height: "calc(100% - 40px)",
    width: "95%",
    marginTop: "20px",
    padding: "0"
  },
  ".profile-pic": { height: "40px", width: "40px" },
  ".form-rounded": { borderRadius: "1rem" },
  ".friend-pic": { height: "50px", width: "50px", marginLeft: "-10px" },
  ".name": { fontWeight: 400, color: "#000" },
  ".under-name": { fontSize: "12px", lineHeight: "15px", maxHeight: "15px" },
  ".icon": { fontSize: "20px", color: "#9CA1A3", cursor: "pointer" },
  ".chat-pic": { height: "30px", width: "30px" },
  ".receive": {
    backgroundColor: "lightgreen",
    borderRadius: "1rem",
    padding: "10px 15px",
    display: "inline-block"
  },
  ".sent": {
    backgroundColor: "whitesmoke",
    borderRadius: "1rem",
    padding: "10px 15px",
    display: "inline-block"
  },
  ".time": {
    fontSize: "10px",
    color: "#9CA1A3",
    marginTop: "3%",
    marginLeft: "1%"
  },
  ".card": { height: "94vh" },
  "#messages": { overflowY: "scroll", overflowX: "hidden" },
  "#lstChat": { overflowY: "scroll", overflowX: "hidden" },
  ".dropdown-toggle::before": { display: "none !important" },
  ".dropdown-toggle::after": { display: "none !important" },
  "#emoji": {
    position: "absolute",
    top: "-30vh",
    backgroundColor: "white",
    borderRadius: "5px",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0,0,0,0.23) 0px 3px 6px"
  },
  "#emoji #myTabContent": { height: "20vh" },
  "#myTabContent a": { textDecoration: "none" },
  "#notification": {
    backgroundColor: "red",
    border: "1px solid red",
    borderRadius: "50%",
    position: "absolute",
    marginTop: "-10%",
    fontSize: "12px",
    width: "30%",
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    marginLeft: "-12%"
  }
}
