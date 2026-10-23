import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import PageHeader from '../components/pageHeader'
import * as ranked from '../components/rank.module.css'

const sortTable = (columnIndex, type) => () => {
  const table = document.getElementById("hprank")
  let switching = true
  let dir = "asc"
  let switchCount = 0

  while (switching) {
    switching = false
    const rows = table.rows
    let shouldSwitch = false
    let i

    for (i = 1; i < rows.length - 1; i++) {
      const xCell = rows[i].getElementsByTagName("TD")[columnIndex]
      const yCell = rows[i + 1].getElementsByTagName("TD")[columnIndex]
      const x = type === "numeric" ? parseFloat(xCell.innerHTML) : xCell.innerHTML.toLowerCase()
      const y = type === "numeric" ? parseFloat(yCell.innerHTML) : yCell.innerHTML.toLowerCase()

      if ((dir === "asc" && x > y) || (dir === "desc" && x < y)) {
        shouldSwitch = true
        break
      }
    }

    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i])
      switching = true
      switchCount++
    } else if (switchCount === 0 && dir === "asc") {
      dir = "desc"
      switching = true
    }
  }
}

const RankPage = () => {
  const data = useStaticQuery(graphql`
    query {
      # Guides only -- blog posts are Mdx nodes too and would add a blank row.
      allMdx(filter: { fileAbsolutePath: { regex: "/src/guides/" } }) {
        nodes {
          id
          frontmatter {
            code
            state
            highpoint
            elevation_feet
            gain_feet
            distance_miles
            difficulty
            effort
          }
        }
      }
    }
  `)

  const guides = [...data.allMdx.nodes].sort(
    (a, b) => parseInt(b.frontmatter.effort, 10) - parseInt(a.frontmatter.effort, 10)
  )

  return (
    <Layout pageTitle="Ranking">
    <PageHeader
      title="Ranking"
      subtitle="Highpoints by height, length, and difficulty"
      description="Ranking the U.S. Highpoints by elevation, distance, difficult, and effort."
      keywords="US highpoints ranked, most difficult US highpoint, list of US highpoints"
      canonical="https://highpoint.guide/rank/"
    />
    <div>
      <div className={ranked.rankBox}>
        <p>All fifty U.S. highpoints by elevation, gain, distance, difficulty, and effort.</p>
        <ul>
          <li><span className={ranked.dimension}>Elevation:</span> Height of the highpoint, measured in feet.</li>
          <li><span className={ranked.dimension}>Gain:</span> Elevation gained on the most popular route, measured in feet.</li>
          <li><span className={ranked.dimension}>Distance:</span> Round-trip length of the most popular route, measured in miles.</li>
          <li><span className={ranked.dimension}>Difficulty:</span> Subjective rating of the highpoint's difficulty, measured on a 0 to 10 scale per the <a href="https://www.summitpost.org/martin-classification-of-difficulty-for-u-s-state-highpoints/1007040" target="_blank" rel="noreferrer">Martin Classification</a>.</li>
          <li><span className={ranked.dimension}>Effort:</span> Subjective rating of the physical effort needed to summit, measured on a 0 to 1000 scale per the <a href="https://www.summitpost.org/the-effort-scale-of-highpointing-the-fifty-us-states/1046476" target="_blank" rel="noreferrer">VanderHeide Effort Scale</a>.</li>
        </ul>
        <p>See our <Link to="/methodology/">methodology</Link> for how these numbers are sourced and measured.</p>
      </div>
      <table id="hprank">
      <thead>
        <tr>
          <th title="state" onClick={sortTable(0, "alpha")}>State &#9660;</th>
          <th title="highpoint" onClick={sortTable(1, "alpha")}>Highpoint &#9660;</th>
          <th title="elevation" onClick={sortTable(2, "numeric")}>Elevation (Feet) &#9660;</th>
          <th title="gain" onClick={sortTable(3, "numeric")}>Gain (Feet) &#9660;</th>
          <th title="distance" onClick={sortTable(4, "numeric")}>Distance (Miles) &#9660;</th>
          <th title="difficulty" onClick={sortTable(5, "numeric")}>Difficulty &#9660;</th>
          <th title="effort" onClick={sortTable(6, "numeric")}>Effort &#9660;</th>
        </tr>
      </thead>
      <tbody>
        {guides.map(({ id, frontmatter }) => (
          <tr key={id}>
            <td><span hidden>{frontmatter.state}</span><Link to={`/${frontmatter.code}/`}>{frontmatter.state}</Link></td>
            <td>{frontmatter.highpoint}</td>
            <td>{frontmatter.elevation_feet}</td>
            <td>{frontmatter.gain_feet}</td>
            <td>{frontmatter.distance_miles}</td>
            <td>{parseInt(frontmatter.difficulty, 10)}</td>
            <td>{parseInt(frontmatter.effort, 10)}</td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
    </Layout>
  )
}

export default RankPage
