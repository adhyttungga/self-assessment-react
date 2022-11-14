import React from 'react'
import { CCol, CContainer, CHeader, CHeaderBrand, CRow, CButton } from '@coreui/react'
import { useNavigate } from 'react-router-dom'
import CIcon from '@coreui/icons-react'
import { cilInfo, cilChevronLeft } from '@coreui/icons'

import BRISVI from 'src/assets/images/BRIxSVI.png'

const PertanyaanHeader = () => {
  const navigate = useNavigate()
  return (
    <>
      <CHeader className="mb-4 border-0">
        <CContainer fluid>
          <div>
            <CButton
              color="light"
              onClick={() => navigate(-1)}
              className="d-inline-block rounded-circle align-middle"
            >
              <CIcon icon={cilChevronLeft} />
            </CButton>

            <h3 className="d-inline-block align-middle mx-3 my-0">Pengisian Assessment</h3>
          </div>

          <CHeaderBrand>
            <img className="d-block w-100" src={BRISVI} alt="logo BRI x SVI" />
          </CHeaderBrand>
        </CContainer>

        <CContainer fluid className="flex-column justify-content-start align-items-start">
          <h4 className="m-0">
            PETUNJUK: Pilih jawaban yang paling menggambarkan kompetensi Anda saat ini
          </h4>

          <p className="m-0">Deskripsi Skor Penilaian</p>

          <p className="m-0">
            Skor 1: Ya, saya dapat melakukan pekerjaan ini sebagian/seluruhnya dengan arahan atasan
          </p>

          <p className="m-0">
            Skor 2: Ya, saya dapat melakukan/mengimplementasikan pekerjaan ini sesuai prosedur
            secara mandiri
          </p>

          <p className="m-0">
            Skor 3: Ya, saya bahkan dapat melakukan analisis, baik berupa monitoring, identifikasi,
            evaluasi maupun investigasi dari pekerjaan ini
          </p>

          <p className="m-0">
            Skor 4: Ya, saya bahkan dapat melakukan pengelolaan tim dalam pekerjaan ini
          </p>

          <p className="m-0">
            Skor 5: Ya, saya bahkan dapat memimpin dan mengembangkan kebijakan, standar, ataupun
            framework dari pekerjaan ini
          </p>

          <p className="m-0">
            Skor 6: Ya, saya bahkan dapat memberi arahan strategis terkait pekerjaan ini
          </p>
        </CContainer>

        <CContainer fluid className="flex-column justify-content-start align-items-start">
          <h4 className="m-0">
            PETUNJUK: Pilih jawaban yang paling menggambarkan kemampuan dan pengalaman Anda saat ini
          </h4>

          <p className="m-0">Deskripsi Skor Penilaian</p>

          <p className="m-0">
            {
              'Skor 1: Saya memiliki pengalaman profesional yang signifikan (>= 85% dari semua kompetensi yang dijelaskan)'
            }
          </p>

          <p className="m-0">
            Skor 2: Saya secara teratur melakukan 50% - 85% dari kegiatan yang dijelaskan dengan
            hasil yang sukses dan konsisten
          </p>

          <p className="m-0">
            Skor 3: Saya memiliki pengetahuan yang relevan, tetapi belum berkesempatan untuk
            mengembangkan kompetensi tersebut
          </p>

          <p className="m-0">Skor 4: Saya tidak memiliki pengalaman terkait penjelasan ini</p>
        </CContainer>

        <CContainer fluid className="flex-column justify-content-start align-items-start">
          <h4 className="m-0">
            PETUNJUK: Berikan jawaban apakah pekerjaan tersebut merupakan pekerjaan Anda? dan adakah
            kesulitan dalam melakukan pekerjaan tersebut? Jawab dengan pilihan Ya atau Tidak (Y/T)
          </h4>
        </CContainer>

        <CContainer fluid className="flex-column justify-content-start align-items-start">
          <h4 className="m-0">
            PETUNJUK: Berikan jawaban apakah training berikut diperlukan, lalu tandai mana yang
            diperlukan sertifikasi dengan menjawab Ya atau Tidak (Y/T)
          </h4>
        </CContainer>
      </CHeader>

      <CContainer fluid className="d-flex justify-content-between align-items-center mb-4">
        <CRow className="rounded-pill border border-light ">
          <CCol xs={3}>
            <div className="text-nowrap my-2 align-middle">
              <span
                style={{ width: '1.5rem', height: '1.5rem' }}
                className="d-inline-block rounded-circle border border-light text-center align-middle"
              >
                1
              </span>
              <span className="align-middle mx-2">Self Assessment 1</span>
            </div>
          </CCol>

          <CCol xs={3}>
            <div className="text-nowrap my-2 align-middle">
              <span
                style={{ width: '1.5rem', height: '1.5rem' }}
                className="d-inline-block rounded-circle border border-light text-center align-middle"
              >
                2
              </span>
              <span className="align-middle mx-2">Self Assessment 2</span>
            </div>
          </CCol>

          <CCol xs={3}>
            <div className="text-nowrap my-2 align-middle">
              <span
                style={{ width: '1.5rem', height: '1.5rem' }}
                className="d-inline-block rounded-circle border border-light text-center align-middle"
              >
                3
              </span>
              <span className="align-middle mx-2">DUJ & Tools</span>
            </div>
          </CCol>

          <CCol xs={3}>
            <div className="text-nowrap my-2 align-middle">
              <span
                style={{ width: '1.5rem', height: '1.5rem' }}
                className="d-inline-block rounded-circle border border-light text-center align-middle"
              >
                4
              </span>
              <span className="align-middle mx-2">Kebutuhan Training</span>
            </div>
          </CCol>
        </CRow>

        <div>
          <CButton
            color="info"
            size="sm"
            onClick={() => navigate('/self-assessment-soal/informasi-skill')}
          >
            <CIcon icon={cilInfo} size="sm" style={{ marginRight: '.25rem' }} />
            Informasi Skill
          </CButton>
        </div>
      </CContainer>
    </>
  )
}

export default PertanyaanHeader
