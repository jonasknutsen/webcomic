import React from 'react'
import PropTypes from 'prop-types'

const Logo = (props) => {
  const { color = '#000', styles = {}, className = '' } = props
  return (
    <svg
      style={styles}
      className={className}
      height='100%'
      width='auto'
      viewBox='0 0 491 64'
      fillRule='evenodd'
      clipRule='evenodd'
      strokeLinejoin='round'
      strokeMiterlimit='1.41421'>
      <g><path d='M1.65,1.072l11.637,0c4.734,0 7.992,1.459 9.773,4.377c1.781,2.918 2.672,7.06 2.672,12.427l0.035,27.176c0,6.352 -0.973,10.922 -2.918,13.711c-1.945,2.789 -5.215,4.184 -9.809,4.184l-11.39,0l0,-61.875Zm16.84,16.629c0,-3.868 -0.457,-6.645 -1.371,-8.332c-0.914,-1.688 -2.414,-2.532 -4.5,-2.532l-3.727,0l0,50.239l3.727,0c1.406,0 2.507,-0.282 3.304,-0.844c1.711,-1.219 2.567,-4.571 2.567,-10.055l0,-28.476Z' style={{ fill: color, fillRule: 'nonzero' }} />
      <path d='M35.048,1.072l12.973,0c3.68,0 6.328,0.761 7.945,2.285c1.617,1.523 2.59,4.113 2.918,7.769c0.141,1.5 0.211,3.838 0.211,7.014c0,3.176 -0.416,5.842 -1.248,7.998c-0.832,2.156 -2.303,3.551 -4.412,4.184c1.547,0.257 2.719,1.072 3.516,2.443c0.797,1.371 1.359,3.551 1.687,6.539c0.328,2.988 0.492,7.43 0.492,13.324c0,5.895 0.188,9.334 0.563,10.319l-7.242,0c-0.375,-0.75 -0.563,-7.7 -0.563,-20.848c0,-4.43 -0.433,-7.002 -1.301,-7.717c-0.867,-0.715 -2.179,-1.072 -3.937,-1.072l-4.324,-0.246l0,29.883l-7.278,0l0,-61.875Zm16.84,15.152c0,-4.758 -0.428,-7.512 -1.283,-8.262c-0.856,-0.75 -2.092,-1.125 -3.709,-1.125l-4.57,0l0,20.883l4.64,0c1.407,0 2.438,-0.269 3.094,-0.809c0.656,-0.539 1.125,-1.57 1.406,-3.093c0.282,-1.524 0.422,-3.914 0.422,-7.172l0,-0.422Z' style={{ fill: color, fillRule: 'nonzero' }} />
      <path d='M75.197,1.072l8.754,0l10.23,61.875l-6.855,0l-1.758,-11.813l-11.215,0l-1.617,11.813l-6.926,0l9.387,-61.875Zm-0.035,44.156l9.492,0l-4.887,-32.695l-0.105,0l-4.5,32.695Z' style={{ fill: color, fillRule: 'nonzero' }} />
      <path d='M133.591,1.072l6.68,0l-7.313,61.875l-7.207,0l-6.609,-45.668l-6.996,45.668l-7.031,0l-8.157,-61.875l6.715,0l5.274,47.425l7.031,-47.425l5.941,0l7.207,47.425l4.465,-47.425Z' style={{ fill: color, fillRule: 'nonzero' }} />
      <path d='M166.638,1.072l6.434,0l0,61.875l-5.344,0l-13.887,-42.469l0.422,15.609l0,26.86l-6.715,0l0,-61.875l5.485,0l14.343,42.117l-0.738,-17.895l0,-24.222Z' style={{ fill: color, fillRule: 'nonzero' }} />
      <path d='M200.845,1.072l18.633,0l0,6.082l-11.391,0l0,19.547l10.688,0l0,6.152l-10.688,0l0,30.094l-7.242,0l0,-61.875Z' style={{ fill: color, fillRule: 'nonzero' }} /><rect x='227.669' y='1.072' width='7.277' height='61.875' style={{ fill: color, fillRule: 'nonzero' }} />
      <path d='M245.634,1.072l18.492,0l0,6.047l-11.214,0l0,21.164l10.617,0l0,6.046l-10.617,0l0,22.571l11.355,0l0,6.047l-18.633,0l0,-61.875Z' style={{ fill: color, fillRule: 'nonzero' }} />
      <path d='M272.74,1.072l7.277,0l0,55.863l11.426,0l0,6.012l-18.703,0l0,-61.875Z' style={{ fill: color, fillRule: 'nonzero' }} />
      <path d='M297.736,1.072l11.637,0c4.734,0 7.992,1.459 9.773,4.377c1.781,2.918 2.672,7.06 2.672,12.427l0.035,27.176c0,6.352 -0.973,10.922 -2.918,13.711c-1.945,2.789 -5.215,4.184 -9.809,4.184l-11.39,0l0,-61.875Zm16.84,16.629c0,-3.868 -0.457,-6.645 -1.371,-8.332c-0.915,-1.688 -2.415,-2.532 -4.5,-2.532l-3.727,0l0,50.239l3.727,0c1.406,0 2.507,-0.282 3.304,-0.844c1.711,-1.219 2.567,-4.571 2.567,-10.055l0,-28.476Z' style={{ fill: color, fillRule: 'nonzero' }} />
      <path d='M367.908,1.072l6.433,0l0,61.875l-5.343,0l-13.887,-42.469l0.422,15.609l0,26.86l-6.715,0l0,-61.875l5.484,0l14.344,42.117l-0.738,-17.895l0,-24.222Z' style={{ fill: color, fillRule: 'nonzero' }} />
      <path d='M383.763,17.876c0,-7.031 1.266,-11.859 3.797,-14.484c1.992,-2.063 4.887,-3.094 8.684,-3.094c5.531,0 9.07,2.274 10.617,6.821c0.914,2.695 1.371,6.281 1.371,10.757l0,27.282c0,6.445 -0.902,11.138 -2.707,14.08c-1.805,2.941 -4.963,4.412 -9.475,4.412c-4.511,0 -7.687,-1.477 -9.527,-4.43c-1.84,-2.953 -2.76,-7.641 -2.76,-14.062l0,-27.282Zm17.192,-0.422c0,-3.96 -0.317,-6.767 -0.95,-8.419c-0.632,-1.653 -1.91,-2.479 -3.832,-2.479c-1.922,0 -3.258,0.844 -4.008,2.531c-0.75,1.688 -1.125,4.465 -1.125,8.332l0,27.809c0,4.711 0.329,7.916 0.985,9.615c0.656,1.699 1.98,2.549 3.973,2.549c1.992,0 3.316,-0.861 3.972,-2.584c0.656,-1.723 0.985,-4.916 0.985,-9.58l0,-27.774Z' style={{ fill: color, fillRule: 'nonzero' }} />
      <path d='M413.576,1.072l20.425,0l0,6.047l-6.363,0l0,55.828l-7.242,0l0,-55.828l-6.82,0l0,-6.047Z' style={{ fill: color, fillRule: 'nonzero' }} />
      <path d='M440.048,1.072l18.492,0l0,6.047l-11.214,0l0,21.164l10.617,0l0,6.046l-10.617,0l0,22.571l11.355,0l0,6.047l-18.633,0l0,-61.875Z' style={{ fill: color, fillRule: 'nonzero' }} />
      <path d='M466.451,20.232c-0.422,-1.477 -0.633,-3.246 -0.633,-5.309c0,-4.476 0.826,-8.033 2.478,-10.67c1.653,-2.636 4.811,-3.955 9.475,-3.955c6,0 9.539,2.883 10.617,8.649c0.469,2.484 0.703,5.613 0.703,9.386l0,3.657l-6.961,0l0,-4.149c0,-3.937 -0.199,-6.586 -0.597,-7.945c-0.399,-1.36 -0.891,-2.262 -1.477,-2.707c-0.586,-0.445 -1.348,-0.668 -2.285,-0.668c-1.758,0 -3.023,0.644 -3.797,1.933c-0.773,1.29 -1.16,3.2 -1.16,5.731c0,2.531 0.351,4.383 1.055,5.555c0.703,1.171 1.57,2.291 2.601,3.357c1.031,1.066 1.606,1.67 1.723,1.811l4.219,4.464c5.062,5.297 7.593,11.227 7.593,17.789c0,5.344 -0.826,9.428 -2.478,12.252c-1.653,2.825 -4.799,4.237 -9.44,4.237c-5.601,0 -9.152,-2.461 -10.652,-7.383c-0.867,-2.766 -1.301,-6.387 -1.301,-10.863c0,-0.118 0,-0.235 0,-0.352l0,-6.012l7.067,0l0,6.293c0,4.524 0.328,7.67 0.984,9.44c0.656,1.769 1.875,2.654 3.656,2.654c1.782,0 3.012,-0.416 3.692,-1.248c0.679,-0.832 1.072,-2.103 1.177,-3.814c0.106,-1.711 0.159,-3.633 0.159,-5.766c0,-4.289 -1.887,-8.32 -5.661,-12.094l-4.043,-4.043c-3.609,-3.703 -5.847,-7.113 -6.714,-10.23Z' style={{ fill: color, fillRule: 'nonzero' }} /></g>
      <style jsx>{`
        .header {
          height: 3rem;
          width: auto;
        }
        @media only screen and (max-width: 667px) {
            .header {
              height: 2rem;
            }
          }
      `}</style>
    </svg>
  )
}

Logo.propTypes = {
  color: PropTypes.string,
  styles: PropTypes.object
}

export default Logo