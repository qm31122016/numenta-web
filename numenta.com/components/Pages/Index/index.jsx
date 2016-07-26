import React from 'react'

import Glance from '../../Glance'
import Paragraph from '../../Paragraph'
import Strong from '../../Strong'
import TextLink from '../../TextLink'

import styles from './index.css'


/**
 *
 */
const PageIndex = (state, {config}) => {
  const {links} = config

  return (
    <div className={styles.columns}>
      <div className={styles.aside}>
        <Glance />
      </div>
      <div className={styles.content}>
        <Paragraph lead={true}>
          <Strong>At Numenta,</Strong> we are tackling one of the most
          important scientific challenges of all time: reverse engineering
          the neocortex. Studying how the brain works helps us understand
          the principles of intelligence. We apply our discoveries to one
          of the most important technology challenges of all time:
          creating intelligent machines. We believe that understanding
          how the neocortex works is the fastest path to machine
          intelligence, and creating intelligent machines is important for
          the continued success of humankind.
        </Paragraph>
        <Paragraph>
          We are at the very beginning of a thrilling new era of computing
          that will unfold over the coming decades, and we invite you to
          learn about our approach, research and technology that is
          helping to advance the state of brain theory and machine
          intelligence.
        </Paragraph>
        <Paragraph>
          On this site, you’ll find information about our company. If
          you’re looking for technical resources, including our research
          details, software implementations and how to get started with
          our technology, visit our HTM open source community at {' '}
          <TextLink to={links.out.org}>{links.out.org}.</TextLink>
        </Paragraph>
      </div>
    </div>
  )
}

PageIndex.contextTypes = {
  config: React.PropTypes.object,
}

export default PageIndex
