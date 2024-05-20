import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListComputerComponent from './components/ListComputerComponent';
import ListDeviceComponent from './components/ListDeviceComponent';
import ListMemoryComponent from './components/ListMemoryComponent';
import ListMonitorComponent from './components/ListMonitorComponent';
import ListNotebookComponent from './components/ListNotebookComponent';
import ListPowerComponent from './components/ListPowerComponent';
import ListPrinterComponent from './components/ListPrinterComponent';
import ListProcessorComponent from './components/ListProcessorComponent';
import ListTabletComponent from './components/ListTabletComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllDataComponent from './components/AllDataComponent';
import ComputerComponent from './components/ComputerComponent';
import DeviceComponent from './components/DeviceComponent';
import MemoryComponent from './components/MemoryComponent';
import MonitorComponent from './components/MonitorComponent';
import NotebookComponent from './components/NotebookComponent';
import PowerComponent from './components/PowerComponent';
import PrinterComponent from './components/PrinterComponent';
import ProcessorComponent from './components/ProcessorComponent';
import TabletComponent from './components/TabletComponent';

function App() {
  return (
    <div className='app-container'>
      <BrowserRouter>
        <HeaderComponent />
        <main className='content'>
          <Routes>
            <Route path='/' element={<AllDataComponent />} />
            <Route path='/desktopComputers' element={<ListComputerComponent />} />
            <Route path='/add-computer' element={<ComputerComponent />} />
            <Route path='/edit-computer/:id' element={<ComputerComponent />} />
            <Route path='/inputDevices' element={<ListDeviceComponent />} />
            <Route path='/add-device' element={<DeviceComponent />} />
            <Route path='/edit-device/:id' element={<DeviceComponent />} />
            <Route path='/memoryDevices' element={<ListMemoryComponent />} />
            <Route path='/add-memory' element={<MemoryComponent />} />
            <Route path='/edit-memory/:id' element={<MemoryComponent />} />
            <Route path='/monitors' element={<ListMonitorComponent />} />
            <Route path='/add-monitor' element={<MonitorComponent />} />
            <Route path='/edit-monitor/:id' element={<MonitorComponent />} />
            <Route path='/notebooks' element={<ListNotebookComponent />} />
            <Route path='/add-notebook' element={<NotebookComponent />} />
            <Route path='/edit-notebook/:id' element={<NotebookComponent />} />
            <Route path='/powerUnits' element={<ListPowerComponent />} />
            <Route path='/add-powerUnit' element={<PowerComponent />} />
            <Route path='/edit-powerUnit/:id' element={<PowerComponent />} />
            <Route path='/printers' element={<ListPrinterComponent />} />
            <Route path='/add-printer' element={<PrinterComponent />} />
            <Route path='/edit-printer/:id' element={<PrinterComponent />} />
            <Route path='/processors' element={<ListProcessorComponent />} />
            <Route path='/add-processor' element={<ProcessorComponent />} />
            <Route path='/edit-processor/:id' element={<ProcessorComponent />} />
            <Route path='/tablets' element={<ListTabletComponent />} />
            <Route path='/add-tablet' element={<TabletComponent />} />
            <Route path='/edit-tablet/:id' element={<TabletComponent />} />
          </Routes>
        </main>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
