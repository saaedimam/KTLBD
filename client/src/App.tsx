
import { Switch, Route } from "wouter";
import Index from "@/pages/Index";
import KTLCareers from "@/pages/KTLCareers";
import KTLInvestors from "@/pages/KTLInvestors";
import NotFound from "@/pages/NotFound";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import { RippleEffect } from "@/components/RippleEffect";
import "./App.css";

function App() {
  return (
    <>
      <RippleEffect />
      <Switch>
        <Route path="/" component={Index} />
        <Route path="/careers" component={KTLCareers} />
        <Route path="/investors" component={KTLInvestors} />
        <Route path="/privacy" component={PrivacyPolicy} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
