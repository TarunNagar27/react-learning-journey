
import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCvLeTHwisItiq2ogbeAY_JJe5SBA38iLCA&s",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Engineer (React)",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://techdocs.akamai.com/identity-cloud/img/social-login/identity-providers/amazon-logo.png",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$52/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHWXIPNdXbKSE0eC4wiiIMmO7aTUjuws_4hw&s",
    companyName: "Apple",
    datePosted: "4 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfHPyUgCEL64IDo5eElnEFljn7RYcMay4iMg&s",
    companyName: "Meta",
    datePosted: "1 week ago",
    post: "UI Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$68/hr",
    location: "London, UK"
  },
  {
    brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    companyName: "Netflix",
    datePosted: "3 weeks ago",
    post: "Frontend Platform Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Los Angeles, USA"
  },
  {
    brandLogo: "https://mailmeteor.com/logos/assets/PNG/Microsoft_Logo_512px.png",
    companyName: "Microsoft",
    datePosted: "6 days ago",
    post: "Cloud Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://www.citypng.com/public/uploads/preview/hd-nvidia-eye-logo-icon-png-701751694965655t2lbe7yugk.png?v=2026022414",
    companyName: "NVIDIA",
    datePosted: "2 days ago",
    post: "AI Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Santa Clara, USA"
  },
  {
    brandLogo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrwQfjxYHgFGWPe6kpIwq3xWtlcSrBgjqfbA&s",
    companyName: "Adobe",
    datePosted: "10 days ago",
    post: "Frontend Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "data:image/png;base64,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",
    companyName: "Tesla",
    datePosted: "4 weeks ago",
    post: "Full Stack Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$72/hr",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://images.icon-icons.com/2407/PNG/512/uber_icon_146079.png",
    companyName: "Uber",
    datePosted: "3 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$66/hr",
    location: "Amsterdam, Netherlands"
  }
];
console.log(jobOpenings)
  return (
    <div className="parent">
      {jobOpenings.map(function(elem,idx) {

        return <div key={idx}> 
        <Card  Logo={elem.brandLogo} company = {elem.companyName} Date = {elem.datePosted} post={elem.post} tag1 = {elem.tag1} tag2 = {elem.tag2} pay = {elem.pay} location = {elem.location} />
        
        </div>
        
      })}
     </div>
  );
};

export default App;