/* eslint-disable no-unused-vars */
import React from 'react'
import songs from '../css/songs.sass'

const Tables = () => (
  <div>
    <h3 className="title12">HOT SONGS</h3>
    <div className="tableContainer">
      <table className="table">
        <tr>
          <td className="tableItem">Los Mesoneros - &quot;Últimas Palabras&quot;</td>
        </tr>
        <tr>
          <td className="tableItem">Los Mesoneros - &quot;Pangea&quot;</td>
        </tr>
        <tr>
          <td className="tableItem">Los Mesoneros - &quot;Solo&quot;</td>
        </tr>
        <tr>
          <td className="tableItem">Los Mesoneros - &quot;Indeleble&quot;</td>
        </tr>
        <tr>
          <td className="tableItem">Los Mesoneros - &quot;Prefiero No Saber&quot;</td>
        </tr>
      </table>

      <table>
        <tr>
          <td className="tableItem">Bad Bunny - &quot;Ye ye ye&quot;</td>
        </tr>
        <tr>
          <td className="tableItem">Bad Bunny - &quot;Neverita&quot;</td>
        </tr>
        <tr>
          <td className="tableItem">Bad Bunny - &quot;Yo No Soy Celoso&quot;</td>
        </tr>
        <tr>
          <td className="tableItem">Bad Bunny - &quot;Callaita&quot;</td>
        </tr>
        <tr>
          <td className="tableItem">Bad Bunny - &quot;Yonaguni&quot;</td>
        </tr>
      </table>
    </div>
  </div>
)

const HotSongs = () => (
  <div>
    <Tables />
  </div>
)

export default HotSongs
