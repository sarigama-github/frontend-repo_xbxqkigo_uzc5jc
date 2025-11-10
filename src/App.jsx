import Header from './components/Header';
import FlowCard from './components/FlowCard';
import TemplateForm from './components/TemplateForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <Header />
      <main>
        <FlowCard />
        <TemplateForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
