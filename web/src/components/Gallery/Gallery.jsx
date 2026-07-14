import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import mw1 from '../../assets/gallery/mw1.jpeg'
import mw2 from '../../assets/gallery/mw2.jpeg'
import mw3 from '../../assets/gallery/mw3.jpeg'
import mw6 from '../../assets/gallery/mw 6.jpeg'
import mw7 from '../../assets/gallery/mw7.jpeg'
import mw8 from '../../assets/gallery/mw8.jpeg'
import mw9 from '../../assets/gallery/mw9.jpeg'
import mw10 from '../../assets/gallery/mw10.jpeg'
import mw11 from '../../assets/gallery/mw11.jpeg'
import mw12 from '../../assets/gallery/mw12.jpeg'
import mw13 from '../../assets/gallery/mw13.jpeg'
import mw14 from '../../assets/gallery/mw14.jpeg'
import { IconArrowRightCircleFill, IconClock, IconCpu, IconGearFill, IconLightning, IconShieldCheck, IconStopwatch, IconTools, IconWrench } from '../icons'

function Gallery() {
  const [slideIndex, setSlideIndex] = useState(0)
  const [openModal, setOpenModal] = useState(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev === 0 ? 1 : 0))
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (openModal !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [openModal])

  useEffect(() => {
    if (openModal === null) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpenModal(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [openModal])

  return (
    <>
      <section id="gallery" className="gallery">
        <div className="container">
          <div className="section-header" data-animate="fade-up">
            <h2>Our Work Gallery</h2>
            <div className="header-line"></div>
            <p className="text-muted">See the quality of our craftsmanship</p>
          </div>

          <div id="workCarousel" className="carousel slide mb-5">
            <div className="carousel-indicators">
              <button
                type="button"
                className={`bg-danger${slideIndex === 0 ? ' active' : ''}`}
                aria-current={slideIndex === 0 ? 'true' : undefined}
                aria-label="Slide 1"
                onClick={() => setSlideIndex(0)}
              ></button>
              <button
                type="button"
                className={`bg-warning${slideIndex === 1 ? ' active' : ''}`}
                aria-current={slideIndex === 1 ? 'true' : undefined}
                aria-label="Slide 2"
                onClick={() => setSlideIndex(1)}
              ></button>
            </div>
            <div className="carousel-inner rounded-4 shadow-lg">
              <div className={`carousel-item${slideIndex === 0 ? ' active' : ''}`}>
                <div className="row g-0">
                  <div className="col-md-6 position-relative">
                    <img
                      src={mw11}
                      className="d-block w-100"
                      style={{ height: '400px', objectFit: 'cover' }}
                      alt="Before repair"
                    />
                    <span className="badge bg-danger position-absolute top-0 start-0 m-3 fs-6">
                      BEFORE
                    </span>
                  </div>
                  <div className="col-md-6 position-relative">
                    <img
                      src={mw12}
                      className="d-block w-100"
                      style={{ height: '400px', objectFit: 'cover' }}
                      alt="After repair"
                    />
                    <span className="badge bg-success position-absolute top-0 end-0 m-3 fs-6">
                      AFTER
                    </span>
                  </div>
                </div>
              </div>
              <div className={`carousel-item${slideIndex === 1 ? ' active' : ''}`}>
                <div className="row g-0">
                  <div className="col-md-6 position-relative">
                    <img
                      src={mw13}
                      className="d-block w-100"
                      style={{ height: '400px', objectFit: 'cover' }}
                      alt="Interior before"
                    />
                    <span className="badge bg-danger position-absolute top-0 start-0 m-3 fs-6">
                      BEFORE
                    </span>
                  </div>
                  <div className="col-md-6 position-relative">
                    <img
                      src={mw14}
                      className="d-block w-100"
                      style={{ height: '400px', objectFit: 'cover' }}
                      alt="Interior after"
                    />
                    <span className="badge bg-success position-absolute top-0 end-0 m-3 fs-6">
                      AFTER
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              onClick={() => setSlideIndex((prev) => (prev === 0 ? 1 : 0))}
            >
              <span className="carousel-control-prev-icon bg-danger rounded-circle p-3"></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              onClick={() => setSlideIndex((prev) => (prev === 0 ? 1 : 0))}
            >
              <span className="carousel-control-next-icon bg-danger rounded-circle p-3"></span>
            </button>
          </div>

          <div className="row g-4">
            <div className="col-lg-6" data-animate="work-item">
              <div
                className="card border-danger border-3 h-100 work-card"
                onClick={() => setOpenModal(1)}
              >
                <div className="position-relative overflow-hidden">
                  <img
                    src={mw6}
                    className="card-img-top"
                    style={{ height: '250px', objectFit: 'cover' }}
                    alt="Engine repair"
                  />
                  <div className="position-absolute top-0 end-0 m-2">
                    <span className="badge bg-danger fs-6">GARAGE</span>
                  </div>
                  <div className="position-absolute bottom-0 start-0 end-0 bg-gradient-dark p-3">
                    <h5 className="text-white mb-0">
                      <IconGearFill className="text-warning me-2" />Engine Overhaul
                    </h5>
                  </div>
                </div>
                <div className="card-body bg-light">
                  <p className="card-text text-dark">
                    Complete engine component repair and reconditioning
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">Click to view details</small>
                    <IconArrowRightCircleFill className="text-danger fs-4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-animate="work-item">
              <div
                className="card border-warning border-3 h-100 work-card"
                onClick={() => setOpenModal(2)}
              >
                <div className="position-relative overflow-hidden">
                  <img
                    src={mw7}
                    className="card-img-top"
                    style={{ height: '250px', objectFit: 'cover' }}
                    alt="CV axle repair"
                  />
                  <div className="position-absolute top-0 end-0 m-2">
                    <span className="badge bg-warning fs-6">REPAIR</span>
                  </div>
                  <div className="position-absolute bottom-0 start-0 end-0 bg-gradient-dark p-3">
                    <h5 className="text-white mb-0">
                      <IconTools className="text-info me-2" />CV Axle Replacement
                    </h5>
                  </div>
                </div>
                <div className="card-body bg-light">
                  <p className="card-text text-dark">
                    Professional drivetrain and suspension service
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">Click to view details</small>
                    <IconArrowRightCircleFill className="text-warning fs-4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-animate="work-item">
              <div
                className="card border-success border-3 h-100 work-card"
                onClick={() => setOpenModal(3)}
              >
                <div className="position-relative overflow-hidden">
                  <img
                    src={mw8}
                    className="card-img-top"
                    style={{ height: '250px', objectFit: 'cover' }}
                    alt="Engine timing"
                  />
                  <div className="position-absolute top-0 end-0 m-2">
                    <span className="badge bg-success fs-6">PRECISION</span>
                  </div>
                  <div className="position-absolute bottom-0 start-0 end-0 bg-gradient-dark p-3">
                    <h5 className="text-white mb-0">
                      <IconStopwatch className="text-success me-2" />Engine Timing
                    </h5>
                  </div>
                </div>
                <div className="card-body bg-light">
                  <p className="card-text text-dark">
                    Precision valve adjustment and timing service
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">Click to view details</small>
                    <IconArrowRightCircleFill className="text-success fs-4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-animate="work-item">
              <div
                className="card border-info border-3 h-100 work-card"
                onClick={() => setOpenModal(4)}
              >
                <div className="position-relative overflow-hidden">
                  <img
                    src={mw1}
                    className="card-img-top"
                    style={{ height: '250px', objectFit: 'cover' }}
                    alt="Brake service"
                  />
                  <div className="position-absolute top-0 end-0 m-2">
                    <span className="badge bg-info fs-6">SAFETY</span>
                  </div>
                  <div className="position-absolute bottom-0 start-0 end-0 bg-gradient-dark p-3">
                    <h5 className="text-white mb-0">
                      <IconShieldCheck className="text-info me-2" />Brake System
                    </h5>
                  </div>
                </div>
                <div className="card-body bg-light">
                  <p className="card-text text-dark">
                    Complete brake and suspension safety service
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">Click to view details</small>
                    <IconArrowRightCircleFill className="text-info fs-4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-animate="work-item">
              <div
                className="card border-primary border-3 h-100 work-card"
                onClick={() => setOpenModal(5)}
              >
                <div className="position-relative overflow-hidden">
                  <img
                    src={mw9}
                    className="card-img-top"
                    style={{ height: '250px', objectFit: 'cover' }}
                    alt="Camshaft inspection"
                  />
                  <div className="position-absolute top-0 end-0 m-2">
                    <span className="badge bg-primary fs-6">TIMING</span>
                  </div>
                  <div className="position-absolute bottom-0 start-0 end-0 bg-gradient-dark p-3">
                    <h5 className="text-white mb-0">
                      <IconClock className="text-primary me-2" />Camshaft Service
                    </h5>
                  </div>
                </div>
                <div className="card-body bg-light">
                  <p className="card-text text-dark">
                    Detailed camshaft and valve timing inspection
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">Click to view details</small>
                    <IconArrowRightCircleFill className="text-primary fs-4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-animate="work-item">
              <div
                className="card border-secondary border-3 h-100 work-card"
                onClick={() => setOpenModal(6)}
              >
                <div className="position-relative overflow-hidden">
                  <img
                    src={mw10}
                    className="card-img-top"
                    style={{ height: '250px', objectFit: 'cover' }}
                    alt="Engine bay repair"
                  />
                  <div className="position-absolute top-0 end-0 m-2">
                    <span className="badge bg-secondary fs-6">SYSTEM</span>
                  </div>
                  <div className="position-absolute bottom-0 start-0 end-0 bg-gradient-dark p-3">
                    <h5 className="text-white mb-0">
                      <IconCpu className="text-secondary me-2" />Engine Bay Service
                    </h5>
                  </div>
                </div>
                <div className="card-body bg-light">
                  <p className="card-text text-dark">
                    Detailed engine bay system repair and maintenance
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">Click to view details</small>
                    <IconArrowRightCircleFill className="text-secondary fs-4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-animate="work-item">
              <div
                className="card border-dark border-3 h-100 work-card"
                onClick={() => setOpenModal(7)}
              >
                <div className="position-relative overflow-hidden">
                  <img
                    src={mw3}
                    className="card-img-top"
                    style={{ height: '250px', objectFit: 'cover' }}
                    alt="Engine removal"
                  />
                  <div className="position-absolute top-0 end-0 m-2">
                    <span className="badge bg-dark fs-6">REBUILD</span>
                  </div>
                  <div className="position-absolute bottom-0 start-0 end-0 bg-gradient-dark p-3">
                    <h5 className="text-white mb-0">
                      <IconWrench className="text-light me-2" />Engine Removal
                    </h5>
                  </div>
                </div>
                <div className="card-body bg-light">
                  <p className="card-text text-dark">
                    Complete engine removal and replacement service
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">Click to view details</small>
                    <IconArrowRightCircleFill className="text-dark fs-4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-animate="work-item">
              <div
                className="card border-danger border-3 h-100 work-card"
                onClick={() => setOpenModal(8)}
              >
                <div className="position-relative overflow-hidden">
                  <img
                    src={mw2}
                    className="card-img-top"
                    style={{ height: '250px', objectFit: 'cover' }}
                    alt="Dashboard wiring"
                  />
                  <div className="position-absolute top-0 end-0 m-2">
                    <span className="badge bg-danger fs-6">ELECTRICAL</span>
                  </div>
                  <div className="position-absolute bottom-0 start-0 end-0 bg-gradient-dark p-3">
                    <h5 className="text-white mb-0">
                      <IconLightning className="text-warning me-2" />Dashboard Wiring
                    </h5>
                  </div>
                </div>
                <div className="card-body bg-light">
                  <p className="card-text text-dark">
                    Dashboard wiring and electronics repair service
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">Click to view details</small>
                    <IconArrowRightCircleFill className="text-danger fs-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className={`modal fade${openModal === 1 ? ' show' : ''}`}
        id="workModal1"
        tabIndex="-1"
        style={{ display: openModal === 1 ? 'block' : 'none' }}
        aria-modal={openModal === 1 ? 'true' : undefined}
        role={openModal === 1 ? 'dialog' : undefined}
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content border-danger border-3">
            <div className="modal-header bg-danger text-white">
              <h5 className="modal-title">
                <IconGearFill className="me-2" />Engine Component Overhaul
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={() => setOpenModal(null)}
              ></button>
            </div>
            <div className="modal-body">
              <img src={mw6} className="img-fluid rounded mb-3" alt="Engine repair" />
              <p className="lead">Professional Engine Repair Service</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Complete engine disassembly and inspection</li>
                <li className="list-group-item">Thorough component cleaning and reconditioning</li>
                <li className="list-group-item">Seal replacement and part restoration</li>
                <li className="list-group-item">Performance testing and quality assurance</li>
              </ul>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" onClick={() => setOpenModal(null)}>
                Close
              </button>
              <Link to="/contact#booking" className="btn btn-success">
                Book This Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`modal fade${openModal === 2 ? ' show' : ''}`}
        id="workModal2"
        tabIndex="-1"
        style={{ display: openModal === 2 ? 'block' : 'none' }}
        aria-modal={openModal === 2 ? 'true' : undefined}
        role={openModal === 2 ? 'dialog' : undefined}
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content border-warning border-3">
            <div className="modal-header bg-warning text-dark">
              <h5 className="modal-title">
                <IconTools className="me-2" />CV Axle & Drivetrain Repair
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setOpenModal(null)}
              ></button>
            </div>
            <div className="modal-body">
              <img src={mw7} className="img-fluid rounded mb-3" alt="CV axle repair" />
              <p className="lead">Expert Drivetrain Service</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">CV axle replacement and joint inspection</li>
                <li className="list-group-item">Suspension component assessment</li>
                <li className="list-group-item">Power transfer restoration</li>
                <li className="list-group-item">Road testing for smooth operation</li>
              </ul>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-warning" onClick={() => setOpenModal(null)}>
                Close
              </button>
              <Link to="/contact#booking" className="btn btn-success">
                Book This Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`modal fade${openModal === 3 ? ' show' : ''}`}
        id="workModal3"
        tabIndex="-1"
        style={{ display: openModal === 3 ? 'block' : 'none' }}
        aria-modal={openModal === 3 ? 'true' : undefined}
        role={openModal === 3 ? 'dialog' : undefined}
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content border-success border-3">
            <div className="modal-header bg-success text-white">
              <h5 className="modal-title">
                <IconStopwatch className="me-2" />Engine Valve Adjustment & Timing
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={() => setOpenModal(null)}
              ></button>
            </div>
            <div className="modal-body">
              <img src={mw8} className="img-fluid rounded mb-3" alt="Engine timing" />
              <p className="lead">Precision Engine Timing Service</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Precision valve adjustment and timing work</li>
                <li className="list-group-item">Camshaft inspection and alignment</li>
                <li className="list-group-item">Engine performance optimization</li>
                <li className="list-group-item">Extended engine life guarantee</li>
              </ul>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success" onClick={() => setOpenModal(null)}>
                Close
              </button>
              <Link to="/contact#booking" className="btn btn-success">
                Book This Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`modal fade${openModal === 4 ? ' show' : ''}`}
        id="workModal4"
        tabIndex="-1"
        style={{ display: openModal === 4 ? 'block' : 'none' }}
        aria-modal={openModal === 4 ? 'true' : undefined}
        role={openModal === 4 ? 'dialog' : undefined}
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content border-info border-3">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title">
                <IconShieldCheck className="me-2" />Brake System & Suspension Service
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={() => setOpenModal(null)}
              ></button>
            </div>
            <div className="modal-body">
              <img src={mw1} className="img-fluid rounded mb-3" alt="Brake service" />
              <p className="lead">Complete Brake & Safety Service</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Complete brake system inspection and repair</li>
                <li className="list-group-item">Brake pad and rotor replacement</li>
                <li className="list-group-item">Suspension component assessment</li>
                <li className="list-group-item">Safety testing and road performance check</li>
              </ul>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-info" onClick={() => setOpenModal(null)}>
                Close
              </button>
              <Link to="/contact#booking" className="btn btn-success">
                Book This Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`modal fade${openModal === 5 ? ' show' : ''}`}
        id="workModal5"
        tabIndex="-1"
        style={{ display: openModal === 5 ? 'block' : 'none' }}
        aria-modal={openModal === 5 ? 'true' : undefined}
        role={openModal === 5 ? 'dialog' : undefined}
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content border-primary border-3">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title">
                <IconClock className="me-2" />Camshaft Inspection & Timing Service
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={() => setOpenModal(null)}
              ></button>
            </div>
            <div className="modal-body">
              <img src={mw9} className="img-fluid rounded mb-3" alt="Camshaft inspection" />
              <p className="lead">Precision Camshaft Service</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Detailed camshaft and valve timing inspection</li>
                <li className="list-group-item">Bearing cap assessment and alignment</li>
                <li className="list-group-item">Precise valve synchronization</li>
                <li className="list-group-item">Timing-related issue prevention</li>
              </ul>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={() => setOpenModal(null)}>
                Close
              </button>
              <Link to="/contact#booking" className="btn btn-success">
                Book This Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`modal fade${openModal === 6 ? ' show' : ''}`}
        id="workModal6"
        tabIndex="-1"
        style={{ display: openModal === 6 ? 'block' : 'none' }}
        aria-modal={openModal === 6 ? 'true' : undefined}
        role={openModal === 6 ? 'dialog' : undefined}
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content border-secondary border-3">
            <div className="modal-header bg-secondary text-white">
              <h5 className="modal-title">
                <IconCpu className="me-2" />Engine Bay System Repair
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={() => setOpenModal(null)}
              ></button>
            </div>
            <div className="modal-body">
              <img src={mw10} className="img-fluid rounded mb-3" alt="Engine bay repair" />
              <p className="lead">Complete Engine Bay Service</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cooling system components service</li>
                <li className="list-group-item">Electrical connections repair</li>
                <li className="list-group-item">Hose replacements and maintenance</li>
                <li className="list-group-item">Hands-on troubleshooting</li>
              </ul>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setOpenModal(null)}
              >
                Close
              </button>
              <Link to="/contact#booking" className="btn btn-success">
                Book This Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`modal fade${openModal === 7 ? ' show' : ''}`}
        id="workModal7"
        tabIndex="-1"
        style={{ display: openModal === 7 ? 'block' : 'none' }}
        aria-modal={openModal === 7 ? 'true' : undefined}
        role={openModal === 7 ? 'dialog' : undefined}
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content border-dark border-3">
            <div className="modal-header bg-dark text-white">
              <h5 className="modal-title">
                <IconWrench className="me-2" />Complete Engine Removal & Replacement
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={() => setOpenModal(null)}
              ></button>
            </div>
            <div className="modal-body">
              <img src={mw3} className="img-fluid rounded mb-3" alt="Engine removal" />
              <p className="lead">Professional Engine Replacement</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Full engine extraction using hydraulic hoist</li>
                <li className="list-group-item">Engine rebuild and replacement service</li>
                <li className="list-group-item">Expert handling of heavy components</li>
                <li className="list-group-item">Precision and safety for major overhauls</li>
              </ul>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-dark" onClick={() => setOpenModal(null)}>
                Close
              </button>
              <Link to="/contact#booking" className="btn btn-success">
                Book This Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`modal fade${openModal === 8 ? ' show' : ''}`}
        id="workModal8"
        tabIndex="-1"
        style={{ display: openModal === 8 ? 'block' : 'none' }}
        aria-modal={openModal === 8 ? 'true' : undefined}
        role={openModal === 8 ? 'dialog' : undefined}
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content border-danger border-3">
            <div className="modal-header bg-danger text-white">
              <h5 className="modal-title">
                <IconLightning className="me-2" />Dashboard Wiring & Electronics Repair
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={() => setOpenModal(null)}
              ></button>
            </div>
            <div className="modal-body">
              <img src={mw2} className="img-fluid rounded mb-3" alt="Dashboard wiring" />
              <p className="lead">Expert Electronics Service</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Dashboard disassembly for electrical repair</li>
                <li className="list-group-item">Expert troubleshooting of wiring faults</li>
                <li className="list-group-item">Sensor issues and component installation</li>
                <li className="list-group-item">HVAC controls and safety systems</li>
              </ul>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" onClick={() => setOpenModal(null)}>
                Close
              </button>
              <Link to="/contact#booking" className="btn btn-success">
                Book This Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {openModal !== null && (
        <div className="modal-backdrop fade show" onClick={() => setOpenModal(null)} />
      )}
    </>
  )
}

export default Gallery
