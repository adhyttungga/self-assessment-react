import React from 'react'
import { CHeader, CHeaderBrand, CContainer } from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux'

import BRISVI from 'src/assets/images/BRIxSVI.png'

const Pertanyaan = () => {
  return (
    <>
      <CHeader className="mb-4">
        <CContainer fluid>
          <h3>Pengisian Assessment</h3>

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
            PETUNJUK: Pilih jawaban yang paling menggambarkan kemampua dan pengalaman Anda saat ini
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
            kesulitan dalam melakukan pekerjaan tersebut? Jawab dengan piliha Ya atau Tidak (Y/T)
          </h4>
        </CContainer>

        <CContainer fluid className="flex-column justify-content-start align-items-start">
          <h4 className="m-0">
            PETUNJUK: Berikan jawaban apakah training berikut diperlukan, lalu tandai mana yang
            diperlukan sertifikasi dengan menjawab Ya atau Tidak (Y/T)
          </h4>
        </CContainer>
      </CHeader>
    </>
  )
}

export default Pertanyaan
