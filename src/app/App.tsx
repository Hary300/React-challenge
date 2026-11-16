import CountrySelector from '../components/17-country-selector/CountrySelector';

function App() {
  return (
    <>
      <CountrySelector
        countries={[
          { id: 'id', name: 'Indonesia', code: '+62' },
          { id: 'us', name: 'United States', code: '+1' },
          { id: 'jp', name: 'Japan', code: '+81' },
        ]}
      />
    </>
  );
}

export default App;
