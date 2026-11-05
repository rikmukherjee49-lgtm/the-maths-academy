
import React, { useState } from 'react';

const cardStyle = {
  background: '#ffffff',
  padding: '24px',
  borderRadius: '14px',
  border: '1px solid #e2e8f0',
  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
  color: '#1e293b'
};

const formulaGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '12px',
  marginTop: '14px'
};

const formulaStyle = {
  background: '#f1f5f9',
  padding: '14px',
  borderRadius: '10px',
  border: '1px solid #e2e8f0',
  color: '#1e293b',
  fontWeight: '600',
  lineHeight: '1.7',
  overflowWrap: 'anywhere'
};

const sections = [
  'Theory',
  'Formula Book',
  'Solved Examples',
  'Visualisation',
  'JEE Main',
  'JEE Advanced',
  'Chapter Test'
];

const A = [1, 2, 3, 4];
const B = [3, 4, 5, 6];

const operations = {
  'Union (A ∪ B)': [...new Set([...A, ...B])],
  'Intersection (A ∩ B)': A.filter(x => B.includes(x)),
  'A − B': A.filter(x => !B.includes(x)),
  'B − A': B.filter(x => !A.includes(x))
};

function SetsChapter({ onBack }) {
  const [active, setActive] = useState('Theory');
  const [operation, setOperation] = useState('Union (A ∪ B)');
  const [answer, setAnswer] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const card = {
    background: '#fff',
    border: '1px solid #e5eaf2',
    borderRadius: 14,
    padding: 22,
    marginBottom: 18
  };

  const heading = {
    color: '#142b4a',
    marginTop: 0
  };

  const button = (selected) => ({
    padding: '10px 16px',
    borderRadius: 9,
    border: selected ? '1px solid #2458a6' : '1px solid #dce3ed',
    background: selected ? '#eaf1ff' : '#fff',
    color: selected ? '#2458a6' : '#34445b',
    cursor: 'pointer',
    fontWeight: 600
  });

  function renderContent() {
    switch (active) {
      
case 'Theory':
  return (
    <>
      <article style={card}>
        <h2 style={heading}>1. Introduction to Sets</h2>
        <h3>Definition</h3>
        <p>
          A <b>set</b> is a well-defined collection of distinct objects.
          The objects belonging to a set are called its elements or members.
        </p>
        <p>
          A collection is well-defined if we can decide unambiguously
          whether a particular object belongs to it or not.
        </p>
        <h3>Examples</h3>
        <ul>
          <li>A = {'{'}1, 2, 3, 4, 5{'}'} is a set of the first five natural numbers.</li>
          <li>B = {'{'}a, e, i, o, u{'}'} is the set of English vowels.</li>
          <li>C = {'{'}x ∈ N : x is even{'}'} is the set of even natural numbers.</li>
        </ul>
        <h3>Symbols and notation</h3>
        <ul>
          <li><b>x ∈ A:</b> x belongs to A.</li>
          <li><b>x ∉ A:</b> x does not belong to A.</li>
          <li><b>∅:</b> Empty set.</li>
          <li><b>n(A):</b> Number of elements in a finite set A.</li>
          <li><b>A ⊆ B:</b> A is a subset of B.</li>
        </ul>
        <div style={{ background: '#eef4ff', padding: 14, borderRadius: 10 }}>
          <b>Important note:</b>
          <p style={{ marginBottom: 0 }}>
            The order of elements does not matter, and repetitions are
            not counted. Thus, {'{'}1, 2, 3{'}'} = {'{'}3, 2, 1, 1{'}'}.
          </p>
        </div>
      </article>

      <article style={card}>
        <h2 style={heading}>2. Methods of Representing Sets</h2>
        <h3>(A) Roster or Tabular Form</h3>
        <p>
          In this method, all the elements of a set are listed inside
          curly brackets, separated by commas.
        </p>
        <p><b>A = {'{'}2, 4, 6, 8, 10{'}'}</b></p>
        <h3>(B) Set-builder or Rule Form</h3>
        <p>
          In this method, a set is described by a common property
          satisfied by all its elements.
        </p>
        <p><b>A = {'{'}x ∈ N : x is even and x ≤ 10{'}'}</b></p>
        <h3>More examples</h3>
        <p>
          The set of squares of natural numbers less than 30 is:
        </p>
        <p>
          Roster form: <b>A = {'{'}1, 4, 9, 16, 25{'}'}</b>
        </p>
        <p>
          Set-builder form: <b>A = {'{'}x² : x ∈ N, x² &lt; 30{'}'}</b>
        </p>
        <div style={{ background: '#fff7e8', padding: 14, borderRadius: 10 }}>
          <b>Important note:</b>
          <p style={{ marginBottom: 0 }}>
            In set-builder notation, the colon ':' or vertical bar '|'
            means "such that".
          </p>
        </div>
      </article>

      <article style={card}>
        <h2 style={heading}>3. Types of Sets</h2>
        <h3>(A) Empty or Null Set</h3>
        <p>
          A set containing no element is called an empty set.
          It is denoted by ∅ or {'{'}{'}'}.
        </p>
        <p>Example: A = {'{'}x ∈ N : x &lt; 0{'}'} = ∅.</p>
        <h3>(B) Singleton Set</h3>
        <p>A set containing exactly one element is called a singleton set.</p>
        <p>Example: A = {'{'}5{'}'}.</p>
        <h3>(C) Finite Set</h3>
        <p>
          A set having a finite number of elements is called a finite set.
        </p>
        <p>Example: A = {'{'}1, 2, 3, 4{'}'} and n(A) = 4.</p>
        <h3>(D) Infinite Set</h3>
        <p>
          A set having infinitely many elements is called an infinite set.
        </p>
        <p>Example: N = {'{'}1, 2, 3, ...{'}'}.</p>
        <h3>(E) Equal Sets</h3>
        <p>
          Two sets A and B are equal if and only if they contain
          exactly the same elements.
        </p>
        <p>
          Example: A = {'{'}1, 2, 3{'}'} and B = {'{'}3, 2, 1{'}'}.
          Therefore, A = B.
        </p>
        <h3>(F) Equivalent Sets</h3>
        <p>
          Two sets are equivalent if they have the same cardinality,
          that is, the same number of elements when the sets are finite.
        </p>
        <p>
          Example: A = {'{'}1, 2, 3{'}'} and B = {'{'}a, b, c{'}'}.
          They are equivalent, but not equal.
        </p>
        <h3>(G) Disjoint Sets</h3>
        <p>
          Two sets are disjoint if they have no common elements.
          In other words, A ∩ B = ∅.
        </p>
        <p>Example: A = {'{'}1, 2{'}'} and B = {'{'}3, 4{'}'}.</p>
        <h3>(H) Overlapping Sets</h3>
        <p>
          Two sets are overlapping if they have at least one common element.
        </p>
        <p>
          Example: A = {'{'}1, 2, 3{'}'} and B = {'{'}3, 4, 5{'}'}.
        </p>
        <div style={{ background: '#eef4ff', padding: 14, borderRadius: 10 }}>
          <b>JEE concept:</b>
          <p style={{ marginBottom: 0 }}>
            Equal sets are always equivalent, but equivalent sets need
            not be equal.
          </p>
        </div>
      </article>

      <article style={card}>
        <h2 style={heading}>4. Subsets and Proper Subsets</h2>
        <h3>Subset</h3>
        <p>
          A set A is called a subset of B if every element of A
          is also an element of B.
        </p>
        <p><b>A ⊆ B ⇔ x ∈ A implies x ∈ B.</b></p>
        <p>
          Example: If A = {'{'}1, 2{'}'} and B = {'{'}1, 2, 3, 4{'}'},
          then A ⊆ B.
        </p>
        <h3>Proper Subset</h3>
        <p>
          A is a proper subset of B if A ⊆ B and A ≠ B.
          It is denoted by A ⊊ B.
        </p>
        <h3>Important properties</h3>
        <ul>
          <li>Every set is a subset of itself: A ⊆ A.</li>
          <li>The empty set is a subset of every set: ∅ ⊆ A.</li>
          <li>If A ⊆ B and B ⊆ A, then A = B.</li>
          <li>If A ⊆ B and B ⊆ C, then A ⊆ C.</li>
          <li>A ⊊ B implies B is not a subset of A.</li>
        </ul>
        <h3>Special results</h3>
        <p>
          If A has n elements, then the number of subsets of A is 2ⁿ.
        </p>
        <p>
          Number of proper subsets = 2ⁿ − 1.
        </p>
        <p>
          Number of non-empty subsets = 2ⁿ − 1.
        </p>
        <p>
          Number of non-empty proper subsets = 2ⁿ − 2.
        </p>
        <div style={{ background: '#fff7e8', padding: 14, borderRadius: 10 }}>
          <b>JEE trap:</b>
          <p style={{ marginBottom: 0 }}>
            The empty set is a proper subset of every non-empty set.
            However, the empty set is not a proper subset of itself.
          </p>
        </div>
      </article>

      <article style={card}>
        <h2 style={heading}>5. Power Set</h2>
        <p>
          The collection of all subsets of a set A is called its
          <b> power set</b>, denoted by P(A).
        </p>
        <h3>Example</h3>
        <p>Let A = {'{'}a, b{'}'}.</p>
        <p>
          P(A) = {'{'}∅, {'{'}a{'}'}, {'{'}b{'}'}, {'{'}a, b{'}'}{'}'}.
        </p>
        <p>Therefore, n(P(A)) = 4 = 2².</p>
        <h3>General result</h3>
        <p>
          If n(A) = n, then:
        </p>
        <p><b>n(P(A)) = 2ⁿ.</b></p>
        <h3>Important properties</h3>
        <ul>
          <li>∅ ∈ P(A), because ∅ ⊆ A.</li>
          <li>A ∈ P(A), because A ⊆ A.</li>
          <li>P(∅) = {'{'}∅{'}'}.</li>
          <li>P(A) always contains 2ⁿ elements when A is finite.</li>
        </ul>
        <div style={{ background: '#eef4ff', padding: 14, borderRadius: 10 }}>
          <b>Remember the distinction:</b>
          <p style={{ marginBottom: 0 }}>
            ∅ is a subset of A, so ∅ ∈ P(A). But ∅ itself has no
            elements, whereas P(A) contains subsets as its elements.
          </p>
        </div>
      </article>

      <article style={card}>
        <h2 style={heading}>6. Universal Set and Complement</h2>
        <h3>Universal Set</h3>
        <p>
          The set containing all the elements under consideration
          in a particular problem is called the universal set.
          It is usually denoted by U.
        </p>
        <h3>Complement of a Set</h3>
        <p>
          If A ⊆ U, then the complement of A consists of all elements
          of U which do not belong to A.
        </p>
        <p><b>A′ = U − A.</b></p>
        <h3>Example</h3>
        <p>
          Let U = {'{'}1, 2, 3, 4, 5, 6{'}'} and
          A = {'{'}1, 2, 3{'}'}.
        </p>
        <p>Then A′ = {'{'}4, 5, 6{'}'}.</p>
        <h3>Properties of complement</h3>
        <ul>
          <li>(A′)′ = A.</li>
          <li>A ∪ A′ = U.</li>
          <li>A ∩ A′ = ∅.</li>
          <li>U′ = ∅.</li>
          <li>∅′ = U.</li>
        </ul>
      </article>

      <article style={card}>
        <h2 style={heading}>7. Operations on Sets</h2>
        <h3>(A) Union</h3>
        <p>
          The union of A and B contains all elements which belong
          to A or B or both.
        </p>
        <p><b>A ∪ B = {'{'}x : x ∈ A or x ∈ B{'}'}.</b></p>
        <h3>(B) Intersection</h3>
        <p>
          The intersection of A and B contains elements common
          to both sets.
        </p>
        <p><b>A ∩ B = {'{'}x : x ∈ A and x ∈ B{'}'}.</b></p>
        <h3>(C) Difference</h3>
        <p>
          A − B contains all elements which belong to A but do
          not belong to B.
        </p>
        <p><b>A − B = {'{'}x : x ∈ A and x ∉ B{'}'}.</b></p>
        <p>
          In general, A − B ≠ B − A. Set difference is not commutative.
        </p>
        <h3>(D) Complement</h3>
        <p>
          A′ = U − A, where U is the universal set.
        </p>
        <h3>Example</h3>
        <p>
          Let A = {'{'}1, 2, 3, 4{'}'} and B = {'{'}3, 4, 5, 6{'}'}.
        </p>
        <ul>
          <li>A ∪ B = {'{'}1, 2, 3, 4, 5, 6{'}'}.</li>
          <li>A ∩ B = {'{'}3, 4{'}'}.</li>
          <li>A − B = {'{'}1, 2{'}'}.</li>
          <li>B − A = {'{'}5, 6{'}'}.</li>
        </ul>
      </article>

      <article style={card}>
        <h2 style={heading}>8. Algebra of Sets</h2>
        <p>
          The following laws are fundamental for simplifying
          expressions involving sets.
        </p>
        <h3>(A) Commutative Laws</h3>
        <p>A ∪ B = B ∪ A</p>
        <p>A ∩ B = B ∩ A</p>
        <h3>(B) Associative Laws</h3>
        <p>(A ∪ B) ∪ C = A ∪ (B ∪ C)</p>
        <p>(A ∩ B) ∩ C = A ∩ (B ∩ C)</p>
        <h3>(C) Distributive Laws</h3>
        <p>A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)</p>
        <p>A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)</p>
        <h3>(D) Identity Laws</h3>
        <p>A ∪ ∅ = A</p>
        <p>A ∩ U = A</p>
        <h3>(E) Domination Laws</h3>
        <p>A ∪ U = U</p>
        <p>A ∩ ∅ = ∅</p>
        <h3>(F) Idempotent Laws</h3>
        <p>A ∪ A = A</p>
        <p>A ∩ A = A</p>
        <h3>(G) Absorption Laws</h3>
        <p>A ∪ (A ∩ B) = A</p>
        <p>A ∩ (A ∪ B) = A</p>
        <h3>(H) Difference Laws</h3>
        <p>A − B = A ∩ B′</p>
        <p>A − ∅ = A</p>
        <p>∅ − A = ∅</p>
        <p>A − A = ∅</p>
        <div style={{ background: '#eef4ff', padding: 14, borderRadius: 10 }}>
          <b>JEE tip:</b>
          <p style={{ marginBottom: 0 }}>
            Learn these identities properly. They are frequently useful
            in simplifying complicated set expressions and proving
            equality of sets.
          </p>
        </div>
      </article>

      <article style={card}>
        <h2 style={heading}>9. De Morgan's Laws</h2>
        <p>
          De Morgan's laws connect the complement of a union
          or intersection with the corresponding individual complements.
        </p>
        <h3>First Law</h3>
        <p><b>(A ∪ B)′ = A′ ∩ B′</b></p>
        <p>
          The complement of a union is the intersection of the
          complements.
        </p>
        <h3>Second Law</h3>
        <p><b>(A ∩ B)′ = A′ ∪ B′</b></p>
        <p>
          The complement of an intersection is the union of
          the complements.
        </p>
        <h3>For three sets</h3>
        <p>(A ∪ B ∪ C)′ = A′ ∩ B′ ∩ C′</p>
        <p>(A ∩ B ∩ C)′ = A′ ∪ B′ ∪ C′</p>
        <h3>Example</h3>
        <p>
          Let U = {'{'}1, 2, 3, 4, 5, 6{'}'},
          A = {'{'}1, 2, 3{'}'} and B = {'{'}3, 4{'}'}.
        </p>
        <p>A ∪ B = {'{'}1, 2, 3, 4{'}'}.</p>
        <p>(A ∪ B)′ = {'{'}5, 6{'}'}.</p>
        <p>A′ = {'{'}4, 5, 6{'}'} and B′ = {'{'}1, 2, 5, 6{'}'}.</p>
        <p>A′ ∩ B′ = {'{'}5, 6{'}'}.</p>
        <p>
          Hence, (A ∪ B)′ = A′ ∩ B′.
        </p>
        <div style={{ background: '#fff7e8', padding: 14, borderRadius: 10 }}>
          <b>Remember:</b>
          <p style={{ marginBottom: 0 }}>
            When taking complements, union changes to intersection
            and intersection changes to union.
          </p>
        </div>
      </article>

      <article style={card}>
        <h2 style={heading}>10. Cardinality and Inclusion-Exclusion</h2>
        <h3>Cardinality</h3>
        <p>
          The number of distinct elements in a finite set A is
          called its cardinality, denoted by n(A).
        </p>
        <h3>For two finite sets</h3>
        <p><b>n(A ∪ B) = n(A) + n(B) − n(A ∩ B).</b></p>
        <p>
          We subtract the intersection because common elements
          are counted twice when adding n(A) and n(B).
        </p>
        <h3>For disjoint sets</h3>
        <p>
          If A ∩ B = ∅, then:
        </p>
        <p><b>n(A ∪ B) = n(A) + n(B).</b></p>
        <h3>For three finite sets</h3>
        <p>
          <b>
            n(A ∪ B ∪ C) = n(A) + n(B) + n(C)
            − n(A ∩ B) − n(B ∩ C) − n(C ∩ A)
            + n(A ∩ B ∩ C).
          </b>
        </p>
        <p>
          We subtract all pairwise intersections and then add
          the triple intersection back once.
        </p>
        <h3>Complement formula</h3>
        <p><b>n(A′) = n(U) − n(A).</b></p>
        <h3>Difference formula</h3>
        <p><b>n(A − B) = n(A) − n(A ∩ B).</b></p>
        <h3>Example</h3>
        <p>
          In a class of 60 students, 35 study Mathematics,
          30 study Physics and 15 study both.
        </p>
        <p>
          Number studying at least one subject:
        </p>
        <p>
          n(M ∪ P) = 35 + 30 − 15 = <b>50.</b>
        </p>
        <p>
          Number studying neither subject = 60 − 50 = <b>10.</b>
        </p>
        <div style={{ background: '#eef4ff', padding: 14, borderRadius: 10 }}>
          <b>JEE application:</b>
          <p style={{ marginBottom: 0 }}>
            Questions involving students who like different subjects,
            people who read newspapers, and divisibility by different
            integers are often solved using inclusion-exclusion.
          </p>
        </div>
      </article>

      <article style={card}>
        <h2 style={heading}>11. Important JEE Results and Common Traps</h2>
        <ol>
          <li>
            If A ⊆ B, then A ∩ B = A and A ∪ B = B.
          </li>
          <li>
            A − B = ∅ if and only if A ⊆ B.
          </li>
          <li>
            A − B = A if and only if A ∩ B = ∅.
          </li>
          <li>
            A ∪ B = A if and only if B ⊆ A.
          </li>
          <li>
            A ∩ B = A if and only if A ⊆ B.
          </li>
          <li>
            P(A) = P(B) if and only if A = B.
          </li>
          <li>
            If A ⊆ B, then P(A) ⊆ P(B).
          </li>
          <li>
            A − B and B − A are always disjoint.
          </li>
          <li>
            A ∪ B = (A − B) ∪ (A ∩ B) ∪ (B − A),
            where these three sets are pairwise disjoint.
          </li>
        </ol>
        <h3>Common mistakes to avoid</h3>
        <ul>
          <li>
            Confusing ∅ with {'{'}∅{'}'}. The first is the empty set;
            the second is a set containing one element, namely ∅.
          </li>
          <li>
            Assuming equivalent sets must be equal.
          </li>
          <li>
            Assuming A − B = B − A.
          </li>
          <li>
            Forgetting to subtract the intersection in the
            two-set inclusion-exclusion formula.
          </li>
          <li>
            Confusing the number of proper subsets with the number
            of non-empty proper subsets.
          </li>
        </ul>
        <div style={{ background: '#fff7e8', padding: 14, borderRadius: 10 }}>
          <b>Final revision point:</b>
          <p style={{ marginBottom: 0 }}>
            For a set containing n elements:
            total subsets = 2ⁿ, proper subsets = 2ⁿ − 1,
            non-empty subsets = 2ⁿ − 1, and non-empty proper
            subsets = 2ⁿ − 2.
          </p>
        </div>
      </article>
    </>
  );


            case 'Formula Book':
        return (
          <div style={{ display: 'grid', gap: '22px' }}>

            <div style={cardStyle}>
              <h2>1. Basic Results on Sets</h2>
              <div style={formulaGridStyle}>
                <div style={formulaStyle}>A = B ⇔ A ⊆ B and B ⊆ A</div>
                <div style={formulaStyle}>A ⊆ A</div>
                <div style={formulaStyle}>∅ ⊆ A, for every set A</div>
                <div style={formulaStyle}>A ⊆ U, where U is the universal set</div>
                <div style={formulaStyle}>A ⊂ B ⇒ A ≠ B</div>
              </div>
            </div>

            <div style={cardStyle}>
              <h2>2. Number of Subsets</h2>
              <p>Let A be a finite set containing n elements.</p>
              <div style={formulaGridStyle}>
                <div style={formulaStyle}>Total number of subsets = 2ⁿ</div>
                <div style={formulaStyle}>Number of proper subsets = 2ⁿ − 1</div>
                <div style={formulaStyle}>Number of non-empty subsets = 2ⁿ − 1</div>
                <div style={formulaStyle}>Number of non-empty proper subsets = 2ⁿ − 2</div>
                <div style={formulaStyle}>Subsets having exactly r elements = ⁿCᵣ</div>
                <div style={formulaStyle}>Subsets containing a fixed element = 2ⁿ⁻¹</div>
                <div style={formulaStyle}>Subsets not containing a fixed element = 2ⁿ⁻¹</div>
                <div style={formulaStyle}>Even-cardinality subsets = 2ⁿ⁻¹ (n ≥ 1)</div>
                <div style={formulaStyle}>Odd-cardinality subsets = 2ⁿ⁻¹ (n ≥ 1)</div>
              </div>
              <p style={{ color: '#64748b', marginTop: '12px' }}>
                Remember: The empty set is a subset of every set. It is not a
                non-empty subset.
              </p>
            </div>

            <div style={cardStyle}>
              <h2>3. Power Set</h2>
              <div style={formulaGridStyle}>
                <div style={formulaStyle}>P(A) = Set of all subsets of A</div>
                <div style={formulaStyle}>n(P(A)) = 2ⁿ, if n(A) = n</div>
                <div style={formulaStyle}>P(∅) = {'{∅}'}</div>
                <div style={formulaStyle}>P(A) = P(B) ⇔ A = B</div>
                <div style={formulaStyle}>A ⊆ B ⇒ P(A) ⊆ P(B)</div>
                <div style={formulaStyle}>n(P(P(A))) = 2²ⁿ</div>
              </div>
              <p style={{ color: '#64748b', marginTop: '12px' }}>
                Here, n(P(P(A))) = 2²ⁿ means 2 raised to the power 2ⁿ.
              </p>
            </div>

            <div style={cardStyle}>
              <h2>4. Algebra of Set Operations</h2>

              <h3>Commutative Laws</h3>
              <div style={formulaGridStyle}>
                <div style={formulaStyle}>A ∪ B = B ∪ A</div>
                <div style={formulaStyle}>A ∩ B = B ∩ A</div>
              </div>

              <h3>Associative Laws</h3>
              <div style={formulaGridStyle}>
                <div style={formulaStyle}>(A ∪ B) ∪ C = A ∪ (B ∪ C)</div>
                <div style={formulaStyle}>(A ∩ B) ∩ C = A ∩ (B ∩ C)</div>
              </div>

              <h3>Distributive Laws</h3>
              <div style={formulaGridStyle}>
                <div style={formulaStyle}>A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)</div>
                <div style={formulaStyle}>A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)</div>
              </div>

              <h3>Identity and Domination Laws</h3>
              <div style={formulaGridStyle}>
                <div style={formulaStyle}>A ∪ ∅ = A</div>
                <div style={formulaStyle}>A ∩ U = A</div>
                <div style={formulaStyle}>A ∪ U = U</div>
                <div style={formulaStyle}>A ∩ ∅ = ∅</div>
              </div>

              <h3>Idempotent and Absorption Laws</h3>
              <div style={formulaGridStyle}>
                <div style={formulaStyle}>A ∪ A = A</div>
                <div style={formulaStyle}>A ∩ A = A</div>
                <div style={formulaStyle}>A ∪ (A ∩ B) = A</div>
                <div style={formulaStyle}>A ∩ (A ∪ B) = A</div>
              </div>
            </div>

            <div style={cardStyle}>
              <h2>5. Complement Laws</h2>
              <div style={formulaGridStyle}>
                <div style={formulaStyle}>A ∪ A′ = U</div>
                <div style={formulaStyle}>A ∩ A′ = ∅</div>
                <div style={formulaStyle}>(A′)′ = A</div>
                <div style={formulaStyle}>U′ = ∅</div>
                <div style={formulaStyle}>∅′ = U</div>
                <div style={formulaStyle}>A − A = ∅</div>
                <div style={formulaStyle}>U − A = A′</div>
              </div>
            </div>

            <div style={cardStyle}>
              <h2>6. De Morgan's Laws</h2>
              <div style={formulaGridStyle}>
                <div style={formulaStyle}>(A ∪ B)′ = A′ ∩ B′</div>
                <div style={formulaStyle}>(A ∩ B)′ = A′ ∪ B′</div>
                <div style={formulaStyle}>(A ∪ B ∪ C)′ = A′ ∩ B′ ∩ C′</div>
                <div style={formulaStyle}>(A ∩ B ∩ C)′ = A′ ∪ B′ ∪ C′</div>
              </div>
            </div>

            <div style={cardStyle}>
              <h2>7. Difference of Sets</h2>
              <div style={formulaGridStyle}>
                <div style={formulaStyle}>A − B = A ∩ B′</div>
                <div style={formulaStyle}>A − ∅ = A</div>
                <div style={formulaStyle}>∅ − A = ∅</div>
                <div style={formulaStyle}>A − B = ∅ ⇔ A ⊆ B</div>
                <div style={formulaStyle}>A − B = A ⇔ A ∩ B = ∅</div>
                <div style={formulaStyle}>(A − B) ∩ (B − A) = ∅</div>
                <div style={formulaStyle}>A = (A − B) ∪ (A ∩ B)</div>
              </div>
            </div>

            <div style={cardStyle}>
              <h2>8. Cardinality Formulas</h2>
              <p>For finite sets A and B:</p>
              <div style={formulaGridStyle}>
                <div style={formulaStyle}>
                  n(A ∪ B) = n(A) + n(B) − n(A ∩ B)
                </div>
                <div style={formulaStyle}>
                  n(A − B) = n(A) − n(A ∩ B)
                </div>
                <div style={formulaStyle}>
                  n(A′) = n(U) − n(A)
                </div>
                <div style={formulaStyle}>
                  A ∩ B = ∅ ⇒ n(A ∪ B) = n(A) + n(B)
                </div>
              </div>
            </div>

            <div style={cardStyle}>
              <h2>9. Inclusion-Exclusion Principle for Three Sets</h2>
              <div style={formulaStyle}>
                n(A ∪ B ∪ C) = n(A) + n(B) + n(C)
                − n(A ∩ B) − n(B ∩ C) − n(C ∩ A)
                + n(A ∩ B ∩ C)
              </div>

              <h3>Number of Elements in Exactly Two Sets</h3>
              <div style={formulaStyle}>
                n(Exactly two) =
                n(A ∩ B) + n(B ∩ C) + n(C ∩ A)
                − 3n(A ∩ B ∩ C)
              </div>

              <h3>Number of Elements in Exactly One Set</h3>
              <div style={formulaStyle}>
                n(Exactly one) =
                n(A) + n(B) + n(C)
                − 2[n(A ∩ B) + n(B ∩ C) + n(C ∩ A)]
                + 3n(A ∩ B ∩ C)
              </div>
            </div>

            <div style={cardStyle}>
              <h2>10. Important JEE Reminders</h2>
              <ul style={{ lineHeight: '2', paddingLeft: '22px' }}>
                <li>
                  A ∪ B contains elements belonging to at least one of the sets.
                </li>
                <li>
                  A ∩ B contains elements common to both sets.
                </li>
                <li>
                  A − B contains elements in A but not in B.
                </li>
                <li>
                  A and B are disjoint if A ∩ B = ∅.
                </li>
                <li>
                  A ⊆ B does not necessarily mean A is a proper subset of B.
                </li>
                <li>
                  The empty set and a set containing the empty set are different:
                  ∅ ≠ {'{∅}'}.
                </li>
                <li>
                  In inclusion-exclusion, the common intersection is added back
                  after subtracting pairwise intersections.
                </li>
              </ul>
            </div>

          </div>
        );

      
      case 'Solved Examples':
        return (
          <div style={{ display: 'grid', gap: '22px' }}>

            {/* BASIC LEVEL */}
            <div style={cardStyle}>
              <h2>Part A: Basic Level</h2>
              <p style={{ color: '#64748b' }}>
                Build a strong foundation with these introductory problems.
              </p>
            </div>

            <div style={cardStyle}>
              <h3>Example 1: Representation of Sets</h3>
              <p><strong>Question:</strong> Write the set of all natural numbers less than 15 which are divisible by 3 in roster form.</p>

              <p><strong>Step 1:</strong> List the natural numbers less than 15 which are divisible by 3.</p>
              <div style={formulaStyle}>3, 6, 9, 12</div>

              <p><strong>Step 2:</strong> Enclose these elements within curly brackets.</p>
              <div style={formulaStyle}>A = {'{3, 6, 9, 12}'}</div>

              <p><strong>Answer:</strong> The required set is A = {'{3, 6, 9, 12}'}.</p>
            </div>

            <div style={cardStyle}>
              <h3>Example 2: Number of Subsets</h3>
              <p><strong>Question:</strong> If A = {'{a, b, c, d}'} , find:</p>
              <ol>
                <li>The total number of subsets.</li>
                <li>The number of proper subsets.</li>
                <li>The number of non-empty proper subsets.</li>
              </ol>

              <p><strong>Step 1: Count the elements.</strong></p>
              <div style={formulaStyle}>n(A) = 4</div>

              <p><strong>Step 2: Total number of subsets.</strong></p>
              <div style={formulaStyle}>2ⁿ = 2⁴ = 16</div>

              <p><strong>Step 3: Number of proper subsets.</strong></p>
              <div style={formulaStyle}>2ⁿ − 1 = 16 − 1 = 15</div>

              <p><strong>Step 4: Number of non-empty proper subsets.</strong></p>
              <div style={formulaStyle}>2ⁿ − 2 = 16 − 2 = 14</div>

              <p><strong>Final Answer:</strong></p>
              <div style={formulaStyle}>
                Total subsets = 16<br />
                Proper subsets = 15<br />
                Non-empty proper subsets = 14
              </div>
            </div>

            <div style={cardStyle}>
              <h3>Example 3: Operations on Sets</h3>
              <p><strong>Question:</strong> Let A = {'{1, 2, 3, 4, 5}'} and B = {'{3, 4, 5, 6, 7}'}. Find:</p>
              <ol>
                <li>A ∪ B</li>
                <li>A ∩ B</li>
                <li>A − B</li>
                <li>B − A</li>
              </ol>

              <p><strong>Step 1: Union.</strong></p>
              <p>Collect all distinct elements belonging to A or B.</p>
              <div style={formulaStyle}>A ∪ B = {'{1, 2, 3, 4, 5, 6, 7}'}</div>

              <p><strong>Step 2: Intersection.</strong></p>
              <p>Collect the elements common to both sets.</p>
              <div style={formulaStyle}>A ∩ B = {'{3, 4, 5}'}</div>

              <p><strong>Step 3: Difference A − B.</strong></p>
              <p>Take elements of A which are not in B.</p>
              <div style={formulaStyle}>A − B = {'{1, 2}'}</div>

              <p><strong>Step 4: Difference B − A.</strong></p>
              <p>Take elements of B which are not in A.</p>
              <div style={formulaStyle}>B − A = {'{6, 7}'}</div>
            </div>

            {/* JEE MAIN LEVEL */}
            <div style={cardStyle}>
              <h2>Part B: JEE Main Level</h2>
              <p style={{ color: '#64748b' }}>
                Apply set identities and cardinality formulas.
              </p>
            </div>

            <div style={cardStyle}>
              <h3>Example 4: Inclusion-Exclusion Principle</h3>
              <p><strong>Question:</strong> In a class of 60 students, 35 like Mathematics, 30 like Physics and 15 like both. Find:</p>
              <ol>
                <li>The number of students who like at least one subject.</li>
                <li>The number of students who like neither subject.</li>
              </ol>

              <p><strong>Step 1: Define the sets.</strong></p>
              <div style={formulaStyle}>
                n(U) = 60<br />
                n(M) = 35<br />
                n(P) = 30<br />
                n(M ∩ P) = 15
              </div>

              <p><strong>Step 2: Apply the inclusion-exclusion formula.</strong></p>
              <div style={formulaStyle}>
                n(M ∪ P) = n(M) + n(P) − n(M ∩ P)
              </div>

              <p><strong>Step 3: Substitute the values.</strong></p>
              <div style={formulaStyle}>
                n(M ∪ P) = 35 + 30 − 15 = 50
              </div>

              <p><strong>Step 4: Find students who like neither subject.</strong></p>
              <div style={formulaStyle}>
                Neither = 60 − 50 = 10
              </div>

              <p><strong>Answer:</strong> 50 students like at least one subject, and 10 like neither.</p>
            </div>

            <div style={cardStyle}>
              <h3>Example 5: Complement and De Morgan's Law</h3>
              <p><strong>Question:</strong> If U = {'{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}'}, A = {'{1, 2, 3, 4, 5}'} and B = {'{4, 5, 6, 7}'}, find (A ∪ B)′ and verify De Morgan's law.</p>

              <p><strong>Step 1: Find the union.</strong></p>
              <div style={formulaStyle}>
                A ∪ B = {'{1, 2, 3, 4, 5, 6, 7}'}
              </div>

              <p><strong>Step 2: Find its complement in U.</strong></p>
              <div style={formulaStyle}>
                (A ∪ B)′ = {'{8, 9, 10}'}
              </div>

              <p><strong>Step 3: Find A′ and B′.</strong></p>
              <div style={formulaStyle}>
                A′ = {'{6, 7, 8, 9, 10}'}<br />
                B′ = {'{1, 2, 3, 8, 9, 10}'}
              </div>

              <p><strong>Step 4: Find their intersection.</strong></p>
              <div style={formulaStyle}>
                A′ ∩ B′ = {'{8, 9, 10}'}
              </div>

              <p><strong>Verification:</strong></p>
              <div style={formulaStyle}>
                (A ∪ B)′ = A′ ∩ B′
              </div>
              <p>Both sides are equal. Hence, De Morgan's law is verified.</p>
            </div>

            <div style={cardStyle}>
              <h3>Example 6: Cardinality and Set Difference</h3>
              <p><strong>Question:</strong> If n(A) = 40, n(B) = 25 and n(A ∪ B) = 50, find:</p>
              <ol>
                <li>n(A ∩ B)</li>
                <li>n(A − B)</li>
                <li>n(B − A)</li>
              </ol>

              <p><strong>Step 1: Use the union formula.</strong></p>
              <div style={formulaStyle}>
                n(A ∪ B) = n(A) + n(B) − n(A ∩ B)
              </div>

              <p><strong>Step 2: Find the intersection.</strong></p>
              <div style={formulaStyle}>
                50 = 40 + 25 − n(A ∩ B)<br />
                n(A ∩ B) = 15
              </div>

              <p><strong>Step 3: Find A − B.</strong></p>
              <div style={formulaStyle}>
                n(A − B) = 40 − 15 = 25
              </div>

              <p><strong>Step 4: Find B − A.</strong></p>
              <div style={formulaStyle}>
                n(B − A) = 25 − 15 = 10
              </div>

              <p><strong>Answer:</strong> The three required values are 15, 25 and 10 respectively.</p>
            </div>

            {/* JEE ADVANCED LEVEL */}
            <div style={cardStyle}>
              <h2>Part C: JEE Advanced Level</h2>
              <p style={{ color: '#64748b' }}>
                These problems require multiple steps and careful reasoning.
              </p>
            </div>

            <div style={cardStyle}>
              <h3>Example 7: Three-Set Inclusion-Exclusion</h3>
              <p><strong>Question:</strong> In a group of 100 students:</p>
              <div style={formulaStyle}>
                n(A) = 50, n(B) = 45, n(C) = 40<br />
                n(A ∩ B) = 20<br />
                n(B ∩ C) = 15<br />
                n(C ∩ A) = 10<br />
                n(A ∩ B ∩ C) = 5
              </div>
              <p>Find the number of students who belong to at least one of the three sets and the number who belong to none of them.</p>

              <p><strong>Step 1: Write the three-set formula.</strong></p>
              <div style={formulaStyle}>
                n(A ∪ B ∪ C) = n(A) + n(B) + n(C)<br />
                − n(A ∩ B) − n(B ∩ C) − n(C ∩ A)<br />
                + n(A ∩ B ∩ C)
              </div>

              <p><strong>Step 2: Substitute the values.</strong></p>
              <div style={formulaStyle}>
                = 50 + 45 + 40 − 20 − 15 − 10 + 5<br />
                = 95
              </div>

              <p><strong>Step 3: Find the number belonging to none.</strong></p>
              <div style={formulaStyle}>
                None = 100 − 95 = 5
              </div>

              <p><strong>Answer:</strong> 95 students belong to at least one set, and 5 belong to none.</p>
            </div>

            <div style={cardStyle}>
              <h3>Example 8: Exactly One and Exactly Two Sets</h3>
              <p><strong>Question:</strong> Using the data from Example 7, find the number of students who belong to exactly one set and exactly two sets.</p>

              <p><strong>Step 1: Find exactly two sets.</strong></p>
              <p>Add the three pairwise intersections. Students belonging to all three sets are counted three times, but should not be counted at all in exactly two sets. So subtract them three times.</p>
              <div style={formulaStyle}>
                Exactly two = n(A ∩ B) + n(B ∩ C) + n(C ∩ A)<br />
                − 3n(A ∩ B ∩ C)<br /><br />
                = 20 + 15 + 10 − 3(5)<br />
                = 30
              </div>

              <p><strong>Step 2: Find exactly one set.</strong></p>
              <p>Subtract twice the sum of pairwise intersections, then add three times the common intersection.</p>
              <div style={formulaStyle}>
                Exactly one = n(A) + n(B) + n(C)<br />
                − 2[n(A ∩ B) + n(B ∩ C) + n(C ∩ A)]<br />
                + 3n(A ∩ B ∩ C)<br /><br />
                = 50 + 45 + 40 − 2(20 + 15 + 10) + 3(5)<br />
                = 135 − 90 + 15<br />
                = 60
              </div>

              <p><strong>Answer:</strong> Exactly one set = 60 students; exactly two sets = 30 students.</p>
            </div>

            <div style={cardStyle}>
              <h3>Example 9: Proof Using Set Identities</h3>
              <p><strong>Question:</strong> Prove that:</p>
              <div style={formulaStyle}>
                A − (B ∪ C) = (A − B) ∩ (A − C)
              </div>

              <p><strong>Step 1: Start with the left-hand side.</strong></p>
              <div style={formulaStyle}>
                A − (B ∪ C)
              </div>

              <p><strong>Step 2: Use the difference formula.</strong></p>
              <div style={formulaStyle}>
                = A ∩ (B ∪ C)′
              </div>

              <p><strong>Step 3: Apply De Morgan's law.</strong></p>
              <div style={formulaStyle}>
                = A ∩ (B′ ∩ C′)
              </div>

              <p><strong>Step 4: Use associativity of intersection.</strong></p>
              <div style={formulaStyle}>
                = (A ∩ B′) ∩ (A ∩ C′)
              </div>

              <p><strong>Step 5: Convert back into set difference.</strong></p>
              <div style={formulaStyle}>
                = (A − B) ∩ (A − C)
              </div>

              <p><strong>Hence proved.</strong></p>
            </div>

            <div style={cardStyle}>
              <h2>Important Problem-Solving Tips</h2>
              <ul style={{ lineHeight: '2', paddingLeft: '22px' }}>
                <li>Always identify the universal set before finding complements.</li>
                <li>For two sets, remember to subtract the common elements once.</li>
                <li>For three sets, add the common intersection back once.</li>
                <li>Distinguish between at least one, exactly one and exactly two.</li>
                <li>In proof questions, convert set differences into intersections with complements.</li>
                <li>Check whether the question asks for elements or the number of elements.</li>
              </ul>
            </div>

          </div>
        );


      
      case 'Visualisation':
        return (
          <div style={{ display: 'grid', gap: '22px' }}>

            <div style={cardStyle}>
              <h2>Interactive Venn Diagram</h2>
              <p>
                Select a set operation to see its corresponding region
                highlighted in the Venn diagram.
              </p>

              <label style={{ display: 'block', fontWeight: '600', margin: '18px 0 8px' }}>
                Choose a set operation:
              </label>

              <select
                value={operation}
                onChange={(e) => setOperation(e.target.value)}
                style={{
                  width: '100%',
                  padding: '13px',
                  borderRadius: '10px',
                  border: '1px solid #cbd5e1',
                  fontSize: '15px',
                  background: '#ffffff',
                  color: '#1e293b'
                }}
              >
                <option>Union (A ∪ B)</option>
                <option>Intersection (A ∩ B)</option>
                <option>Difference (A − B)</option>
                <option>Difference (B − A)</option>
                <option>Complement (A′)</option>
                <option>Complement (B′)</option>
                <option>Symmetric Difference (A △ B)</option>
              </select>

              <div style={{ marginTop: '20px', overflowX: 'auto' }}>
                <svg
                  viewBox="0 0 440 290"
                  style={{ width: '100%', minWidth: '300px', maxWidth: '550px', display: 'block', margin: 'auto' }}
                >
                  <defs>
                    <clipPath id="venn-clip-b">
                      <circle cx="255" cy="140" r="88" />
                    </clipPath>

                    <mask id="venn-mask-a-only" maskUnits="userSpaceOnUse" x="0" y="0" width="440" height="290">
                      <rect width="440" height="290" fill="white" />
                      <circle cx="255" cy="140" r="88" fill="black" />
                    </mask>

                    <mask id="venn-mask-b-only" maskUnits="userSpaceOnUse" x="0" y="0" width="440" height="290">
                      <rect width="440" height="290" fill="white" />
                      <circle cx="185" cy="140" r="88" fill="black" />
                    </mask>

                    <mask id="venn-mask-a-complement" maskUnits="userSpaceOnUse" x="0" y="0" width="440" height="290">
                      <rect width="440" height="290" fill="white" />
                      <circle cx="185" cy="140" r="88" fill="black" />
                    </mask>

                    <mask id="venn-mask-b-complement" maskUnits="userSpaceOnUse" x="0" y="0" width="440" height="290">
                      <rect width="440" height="290" fill="white" />
                      <circle cx="255" cy="140" r="88" fill="black" />
                    </mask>
                  </defs>

                  <rect
                    x="15"
                    y="15"
                    width="410"
                    height="260"
                    rx="12"
                    fill="#f8fafc"
                    stroke="#64748b"
                    strokeWidth="2"
                  />

                  <text x="30" y="40" fontSize="16" fontWeight="bold" fill="#334155">
                    U
                  </text>

                  {operation === 'Union (A ∪ B)' && (
  <>
    <circle cx="185" cy="140" r="88" fill="#38bdf8" />
    <circle cx="255" cy="140" r="88" fill="#38bdf8" />
  </>
)}

{operation === 'Intersection (A ∩ B)' && (
  <circle
    cx="185"
    cy="140"
    r="88"
    fill="#0ea5e9"
    clipPath="url(#venn-clip-b)"
  />
)}

{operation === 'Difference (A − B)' && (
  <circle
    cx="185"
    cy="140"
    r="88"
    fill="#38bdf8"
    mask="url(#venn-mask-a-only)"
  />
)}

{operation === 'Difference (B − A)' && (
  <circle
    cx="255"
    cy="140"
    r="88"
    fill="#38bdf8"
    mask="url(#venn-mask-b-only)"
  />
)}

{operation === 'Complement (A′)' && (
  <rect
    x="15"
    y="15"
    width="410"
    height="260"
    rx="12"
    fill="#fbbf24"
    mask="url(#venn-mask-a-complement)"
  />
)}

{operation === 'Complement (B′)' && (
  <rect
    x="15"
    y="15"
    width="410"
    height="260"
    rx="12"
    fill="#fbbf24"
    mask="url(#venn-mask-b-complement)"
  />
)}

{operation === 'Symmetric Difference (A △ B)' && (
  <>
    <circle
      cx="185"
      cy="140"
      r="88"
      fill="#38bdf8"
      mask="url(#venn-mask-a-only)"
    />
    <circle
      cx="255"
      cy="140"
      r="88"
      fill="#38bdf8"
      mask="url(#venn-mask-b-only)"
    />
  </>
)}

                  <circle
                    cx="185"
                    cy="140"
                    r="88"
                    fill="none"
                    stroke="#0369a1"
                    strokeWidth="2.5"
                  />
                  <circle
                    cx="255"
                    cy="140"
                    r="88"
                    fill="none"
                    stroke="#0369a1"
                    strokeWidth="2.5"
                  />

                  <text x="145" y="145" fontSize="20" fontWeight="bold" fill="#0c4a6e">A</text>
                  <text x="285" y="145" fontSize="20" fontWeight="bold" fill="#0c4a6e">B</text>
                </svg>
              </div>

              <p style={{ textAlign: 'center', color: '#64748b', fontSize: '13px' }}>
                The shaded region represents the selected operation.
                The diagram is illustrative and not to scale.
              </p>
            </div>

            <div style={cardStyle}>
              <h2>Understand the Selected Operation</h2>

              {operation === 'Union (A ∪ B)' && (
  <>
    <h3>A ∪ B — Union</h3>
    <p>Union contains every element belonging to A or B or both.</p>
    <div style={formulaStyle}>A ∪ B = {'{1, 2, 3, 4, 5, 6}'}</div>
  </>
)}

{operation === 'Intersection (A ∩ B)' && (
  <>
    <h3>A ∩ B — Intersection</h3>
    <p>Intersection contains only the elements common to both sets.</p>
    <div style={formulaStyle}>A ∩ B = {'{3, 4}'}</div>
  </>
)}

{operation === 'Difference (A − B)' && (
  <>
    <h3>A − B — Difference</h3>
    <p>Take the elements of A which do not belong to B.</p>
    <div style={formulaStyle}>A − B = {'{1, 2}'}</div>
  </>
)}

{operation === 'Difference (B − A)' && (
  <>
    <h3>B − A — Difference</h3>
    <p>Take the elements of B which do not belong to A.</p>
    <div style={formulaStyle}>B − A = {'{5, 6}'}</div>
  </>
)}

{operation === 'Complement (A′)' && (
  <>
    <h3>A′ — Complement of A</h3>
    <p>Complement contains all elements of the universal set that are not in A.</p>
    <div style={formulaStyle}>A′ = {'{5, 6, 7, 8}'}</div>
  </>
)}

{operation === 'Complement (B′)' && (
  <>
    <h3>B′ — Complement of B</h3>
    <p>Complement contains all elements of the universal set that are not in B.</p>
    <div style={formulaStyle}>B′ = {'{1, 2, 7, 8}'}</div>
  </>
)}

{operation === 'Symmetric Difference (A △ B)' && (
  <>
    <h3>A △ B — Symmetric Difference</h3>
    <p>It contains elements belonging to exactly one of the two sets, but not both.</p>
    <div style={formulaStyle}>
      A △ B = (A − B) ∪ (B − A)<br />
      = {'{1, 2, 5, 6}'}
    </div>
  </>
)}
            </div>

            <div style={cardStyle}>
              <h2>Sets Used in This Diagram</h2>
              <div style={formulaStyle}>
                Universal Set: U = {'{1, 2, 3, 4, 5, 6, 7, 8}'}<br /><br />
                Set A = {'{1, 2, 3, 4}'}<br /><br />
                Set B = {'{3, 4, 5, 6}'}
              </div>
              <p style={{ color: '#64748b', marginTop: '12px' }}>
                Notice that 3 and 4 are common to both sets.
                Elements 7 and 8 belong to neither A nor B.
              </p>
            </div>

          </div>
        );


      case 'JEE Main':
  return (
    <article style={card}>
      <JeeMainPractice />
    </article>
  );

      case 'JEE Advanced':
  return (
    <article style={card}>
      <JeeAdvancedPractice />
    </article>
  );

      case 'Chapter Test':
  return (
    <article style={card}>
      <SetsChapterTest />
    </article>
  );

      default:
        return null;
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f5f7fb',
      color: '#26364c',
      paddingBottom: 50
    }}>
      <header style={{
        background: '#142b4a',
        color: 'white',
        padding: '16px 5%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 12
      }}>
        <b style={{ fontSize: 19 }}>∑ The Maths Academy</b>
        <button
          onClick={onBack}
          style={{
            ...button(false),
            color: '#fff',
            background: 'transparent',
            borderColor: '#8da1bb'
          }}
        >
          ← Back to Home
        </button>
      </header>

      <main style={{ maxWidth: 1100, margin: 'auto', padding: '35px 5%' }}>
        <p style={{ color: '#65748a', fontSize: 14 }}>
          Home / Class 11 / Mathematics / Sets
        </p>
        <div style={{
          background: 'linear-gradient(120deg, #142b4a, #2458a6)',
          color: 'white',
          borderRadius: 18,
          padding: '32px 28px',
          marginBottom: 25
        }}>
          <span style={{ fontSize: 12, letterSpacing: 2 }}>
            CLASS 11 · JEE MAIN + ADVANCED
          </span>
          <h1 style={{ fontSize: 'clamp(30px, 5vw, 46px)', margin: '12px 0' }}>
            Sets
          </h1>
          <p style={{ maxWidth: 650, lineHeight: 1.7 }}>
            Build a strong foundation in set theory, explore set
            operations and master the concepts required for JEE Mathematics.
          </p>
          <span style={{ fontSize: 13, opacity: .8 }}>
            Learning module · Theory, examples, practice and assessment
          </span>
        </div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 9,
          marginBottom: 22
        }}>
          {sections.map(section => (
            <button
              key={section}
              style={button(active === section)}
              onClick={() => {
                setActive(section);
                setSubmitted(false);
              }}
            >
              {section}
            </button>
          ))}
        </div>

        <div>
          {renderContent()}
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: 12,
          flexWrap: 'wrap'
        }}>
          <button
            style={button(false)}
            onClick={() => setActive(sections[
              Math.max(0, sections.indexOf(active) - 1)
            ])}
          >
            ← Previous section
          </button>
          <button
            style={button(false)}
            onClick={() => setActive(sections[
              Math.min(sections.length - 1, sections.indexOf(active) + 1)
            ])}
          >
            Next section →
          </button>
        </div>
      </main>
    </div>
  );
}

function JeeMainPractice() {
  const questions = [
    {
      q: "Which of the following is an empty set?",
      o: ["{x ∈ N : x < 0}", "{x ∈ Z : x² = 4}", "{x ∈ R : x² = 1}", "{x ∈ N : x ≤ 3}"],
      a: 0,
      e: "There is no natural number less than zero. Hence, the first set is empty."
    },
    {
      q: "If A = {1, 2, 3, 4}, then n(P(A)) is:",
      o: ["4", "8", "16", "32"],
      a: 2,
      e: "A set with n elements has 2ⁿ subsets. Here n = 4, so 2⁴ = 16."
    },
    {
      q: "A set contains 6 elements. The number of proper subsets is:",
      o: ["32", "63", "64", "62"],
      a: 1,
      e: "Number of proper subsets = 2ⁿ − 1 = 2⁶ − 1 = 63."
    },
    {
      q: "If A = {1, 2, 3} and B = {3, 4, 5}, then A ∩ B is:",
      o: ["{1, 2}", "{3}", "{4, 5}", "{1, 2, 3, 4, 5}"],
      a: 1,
      e: "The intersection contains elements common to both sets. Only 3 is common."
    },
    {
      q: "If A = {1, 2, 3} and B = {3, 4, 5}, then A ∪ B is:",
      o: ["{3}", "{1, 2, 3}", "{3, 4, 5}", "{1, 2, 3, 4, 5}"],
      a: 3,
      e: "The union contains every distinct element of both sets."
    },
    {
      q: "If A ⊆ B, then A ∩ B equals:",
      o: ["A", "B", "∅", "A ∪ B"],
      a: 0,
      e: "Since every element of A belongs to B, the common elements are exactly the elements of A."
    },
    {
      q: "If A ⊆ B, then A ∪ B equals:",
      o: ["A", "B", "∅", "A ∩ B"],
      a: 1,
      e: "Since A is contained in B, their union is B."
    },
    {
      q: "If n(A) = 20, n(B) = 15 and n(A ∩ B) = 5, then n(A ∪ B) is:",
      o: ["25", "30", "35", "40"],
      a: 1,
      e: "n(A ∪ B) = n(A) + n(B) − n(A ∩ B) = 20 + 15 − 5 = 30."
    },
    {
      q: "If A and B are disjoint sets, then:",
      o: ["A = B", "A ∩ B = ∅", "A ∪ B = ∅", "A ⊆ B"],
      a: 1,
      e: "Disjoint sets have no common elements. Therefore, their intersection is empty."
    },
    {
      q: "If U = {1,2,3,4,5,6} and A = {2,4,6}, then A′ is:",
      o: ["{2,4,6}", "{1,3,5}", "{1,2,3}", "{4,5,6}"],
      a: 1,
      e: "A′ = U − A. Removing 2, 4 and 6 from U gives {1,3,5}."
    },
    {
      q: "If n(P(A)) = 128, then n(A) is:",
      o: ["5", "6", "7", "8"],
      a: 2,
      e: "2ⁿ = 128 = 2⁷. Hence n(A) = 7."
    },
    {
      q: "The number of non-empty subsets of a set with 4 elements is:",
      o: ["8", "12", "15", "16"],
      a: 2,
      e: "Number of non-empty subsets = 2⁴ − 1 = 15."
    },
    {
      q: "If A − B = ∅, then:",
      o: ["A ∩ B = ∅", "A ⊆ B", "B ⊆ A", "A = ∅"],
      a: 1,
      e: "A − B = ∅ means no element of A lies outside B. Hence A ⊆ B."
    },
    {
      q: "For any two sets A and B, A − B is equal to:",
      o: ["A ∩ B", "A ∩ B′", "A′ ∩ B", "A ∪ B"],
      a: 1,
      e: "A − B contains elements in A but not in B. Therefore A − B = A ∩ B′."
    },
    {
      q: "Which is De Morgan's first law?",
      o: ["(A ∪ B)′ = A′ ∪ B′", "(A ∪ B)′ = A′ ∩ B′", "(A ∩ B)′ = A′ ∩ B′", "A ∪ A′ = A"],
      a: 1,
      e: "The complement of a union is the intersection of the complements."
    },
    {
      q: "Which is De Morgan's second law?",
      o: ["(A ∩ B)′ = A′ ∪ B′", "(A ∩ B)′ = A′ ∩ B′", "(A ∪ B)′ = A′ ∪ B′", "A ∩ A′ = A"],
      a: 0,
      e: "The complement of an intersection is the union of the complements."
    },
    {
      q: "If n(A) = 30, n(B) = 25 and n(A ∪ B) = 40, then n(A ∩ B) is:",
      o: ["10", "15", "20", "25"],
      a: 1,
      e: "n(A ∩ B) = 30 + 25 − 40 = 15."
    },
    {
      q: "If n(A) = 18, n(B) = 12 and A ∩ B = ∅, then n(A ∪ B) is:",
      o: ["6", "18", "30", "216"],
      a: 2,
      e: "For disjoint sets, n(A ∪ B) = n(A) + n(B) = 18 + 12 = 30."
    },
    {
      q: "If A = {1,2,3,4} and B = {3,4,5,6}, then A − B is:",
      o: ["{1,2}", "{3,4}", "{5,6}", "{1,2,5,6}"],
      a: 0,
      e: "A − B contains elements in A which are not in B. Thus A − B = {1,2}."
    },
    {
      q: "For the same sets A = {1,2,3,4} and B = {3,4,5,6}, B − A is:",
      o: ["{1,2}", "{3,4}", "{5,6}", "{1,2,5,6}"],
      a: 2,
      e: "B − A contains elements in B which are not in A. Thus B − A = {5,6}."
    },
    {
      q: "The symmetric difference A △ B is equal to:",
      o: ["A ∩ B", "A ∪ B", "(A − B) ∪ (B − A)", "A − B"],
      a: 2,
      e: "Symmetric difference contains elements belonging to exactly one of the two sets."
    },
    {
      q: "If n(A) = 10 and n(B) = 8, and n(A ∩ B) = 3, then n(A △ B) is:",
      o: ["12", "15", "18", "21"],
      a: 0,
      e: "n(A △ B) = n(A) + n(B) − 2n(A ∩ B) = 10 + 8 − 6 = 12."
    },
    {
      q: "If a set has 3 elements, the number of elements in its power set is:",
      o: ["3", "6", "8", "9"],
      a: 2,
      e: "The power set contains 2³ = 8 subsets."
    },
    {
      q: "If A ∩ B = A, then:",
      o: ["A ⊆ B", "B ⊆ A", "A ∩ B = ∅", "A = ∅"],
      a: 0,
      e: "A ∩ B = A means every element of A belongs to B. Hence A ⊆ B."
    },
    {
      q: "If A ∪ B = A, then:",
      o: ["A ⊆ B", "B ⊆ A", "A ∩ B = ∅", "A = ∅"],
      a: 1,
      e: "A ∪ B = A means adding B introduces no new element. Therefore B ⊆ A."
    },
    {
      q: "If n(A) = 25, n(B) = 20 and n(A ∩ B) = 10, then the number of elements in A − B is:",
      o: ["10", "15", "20", "25"],
      a: 1,
      e: "n(A − B) = n(A) − n(A ∩ B) = 25 − 10 = 15."
    },
    {
      q: "In a class of 60 students, 35 like Mathematics, 30 like Physics and 15 like both. How many like neither?",
      o: ["5", "10", "15", "20"],
      a: 1,
      e: "n(M ∪ P) = 35 + 30 − 15 = 50. Therefore neither = 60 − 50 = 10."
    },
    {
      q: "If n(A) = 40, n(B) = 35, n(C) = 30, n(A ∩ B) = 15, n(B ∩ C) = 10, n(C ∩ A) = 12 and n(A ∩ B ∩ C) = 5, then n(A ∪ B ∪ C) is:",
      o: ["63", "68", "73", "78"],
      a: 2,
      e: "Using inclusion-exclusion: 40 + 35 + 30 − 15 − 10 − 12 + 5 = 73."
    },
    {
      q: "If n(A) = 5, then the number of proper non-empty subsets of A is:",
      o: ["30", "31", "32", "33"],
      a: 0,
      e: "Proper non-empty subsets = 2⁵ − 2 = 30."
    },
    {
      q: "For any sets A and B, A ∩ (A ∪ B) equals:",
      o: ["A", "B", "A ∪ B", "∅"],
      a: 0,
      e: "By the absorption law, A ∩ (A ∪ B) = A."
    },
    {
      q: "If U has 100 elements and A has 65 elements, then n(A′) is:",
      o: ["25", "35", "45", "65"],
      a: 1,
      e: "n(A′) = n(U) − n(A) = 100 − 65 = 35."
    }
  ];

  const buttonStyle = {
  background: '#2563eb',
  color: '#ffffff',
  padding: '12px 24px',
  border: 'none',
  borderRadius: '8px',
  fontSize: '15px',
  fontWeight: '600',
  cursor: 'pointer'
};
  const [current, setCurrent] = React.useState(0);
  const [selected, setSelected] = React.useState(null);
  const [submitted, setSubmitted] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [finished, setFinished] = React.useState(false);

  const question = questions[current];
  const total = questions.length;

  const submitAnswer = () => {
    if (selected === null || submitted) return;

    setSubmitted(true);

    if (selected === question.a) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    if (current === total - 1) {
      setFinished(true);
    } else {
      setCurrent(c => c + 1);
      setSelected(null);
      setSubmitted(false);
    }
  };

  const restartTest = () => {
    setCurrent(0);
    setSelected(null);
    setSubmitted(false);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    const percentage = Math.round(score / total * 100);

    return (
      <div style={{
        ...cardStyle,
        maxWidth: "850px",
        margin: "auto",
        textAlign: "center"
      }}>
        <h1 style={{ color: "#1e40af" }}>Test Completed!</h1>
        <h2>Your JEE Main Result</h2>

        <div style={{
          fontSize: "48px",
          fontWeight: "bold",
          color: "#1d4ed8"
        }}>
          {score} / {total}
        </div>

        <h2>{percentage}%</h2>
        <p>You answered {score} out of {total} questions correctly.</p>

        <p>
          {percentage >= 80
            ? "Excellent work! Keep practising."
            : percentage >= 50
            ? "Good effort! Revise the concepts and try again."
            : "Keep learning. Review the explanations and practise again."}
        </p>

        <button onClick={restartTest} style={buttonStyle}>
          Restart Test
        </button>
      </div>
    );
  }

  return (
    <div style={{
      maxWidth: "850px",
      margin: "auto",
      color: "#1e293b"
    }}>
      <div style={{ ...cardStyle, marginBottom: "20px" }}>
        <h1 style={{ color: "#1e40af", marginTop: 0 }}>
          JEE Main Practice Test
        </h1>

        <p>Chapter: Sets | 30 Single Correct Questions</p>

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
          flexWrap: "wrap"
        }}>
          <strong>Question {current + 1} of {total}</strong>
          <strong>Score: {score}</strong>
        </div>

        <div style={{
          height: "9px",
          background: "#e2e8f0",
          borderRadius: "10px",
          marginTop: "12px",
          overflow: "hidden"
        }}>
          <div style={{
            width: `${(current + 1) / total * 100}%`,
            height: "100%",
            background: "#2563eb",
            borderRadius: "10px"
          }} />
        </div>
      </div>

      <div style={cardStyle}>
        <h2 style={{ fontSize: "19px", lineHeight: "1.6" }}>
          Q{current + 1}. {question.q}
        </h2>

        <p style={{ color: "#64748b" }}>
          Choose the correct option:
        </p>

        {question.o.map((option, index) => {
          let background = "#ffffff";
          let border = "1px solid #cbd5e1";

          if (submitted && index === question.a) {
            background = "#dcfce7";
            border = "2px solid #16a34a";
          } else if (submitted && index === selected) {
            background = "#fee2e2";
            border = "2px solid #dc2626";
          } else if (!submitted && index === selected) {
            background = "#dbeafe";
            border = "2px solid #2563eb";
          }

          return (
            <button
              key={index}
              onClick={() => !submitted && setSelected(index)}
              disabled={submitted}
              style={{
                display: "block",
                width: "100%",
                padding: "14px",
                marginBottom: "10px",
                textAlign: "left",
                borderRadius: "10px",
                background,
                border,
                color: "#1e293b",
                cursor: submitted ? "default" : "pointer",
                fontSize: "15px"
              }}
            >
              <strong>{String.fromCharCode(65 + index)}. </strong>
              {option}
            </button>
          );
        })}

        {submitted && (
          <div style={{
            padding: "18px",
            marginTop: "20px",
            borderRadius: "10px",
            background: selected === question.a ? "#f0fdf4" : "#fff7ed",
            border: "1px solid #cbd5e1"
          }}>
            <h3 style={{
              color: selected === question.a ? "#15803d" : "#c2410c"
            }}>
              {selected === question.a
                ? "Correct Answer!"
                : "Incorrect Answer"}
            </h3>

            <p>
              <strong>Correct option: </strong>
              {String.fromCharCode(65 + question.a)}. {question.o[question.a]}
            </p>

            <p><strong>Explanation: </strong>{question.e}</p>
          </div>
        )}

        <div style={{ marginTop: "22px" }}>
          {!submitted ? (
            <button
              onClick={submitAnswer}
              disabled={selected === null}
              style={{
                ...buttonStyle,
                opacity: selected === null ? 0.5 : 1,
                cursor: selected === null ? "not-allowed" : "pointer"
              }}
            >
              Submit Answer
            </button>
          ) : (
            <button onClick={nextQuestion} style={buttonStyle}>
              {current === total - 1
                ? "View Final Result"
                : "Next Question"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function JeeAdvancedPractice() {
      const buttonStyle = {
    background: '#2563eb',
    color: '#ffffff',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer'
  };

  const questions = [
    {
      type: 'single',
      q: 'Let A and B be finite sets such that A ⊆ B and n(A) = n(B). Which statement must be true?',
      o: ['A ∩ B = ∅', 'A = B', 'A ∪ B = ∅', 'A is a proper subset of B'],
      a: [1],
      e: 'Since A ⊆ B and both sets have the same finite number of elements, B cannot contain any additional element. Hence A = B.'
    },
    {
      type: 'multiple',
      q: 'Let A and B be two sets. Which of the following identities are always true?',
      o: [
        'A \\ (A ∩ B) = A \\ B',
        'A ∪ (B \\ A) = A ∪ B',
        'A ∩ (B \\ A) = ∅',
        'A \\ (B \\ A) = A'
      ],
      a: [0, 1, 2, 3],
      e: 'All four are true. Removing the intersection from A leaves exactly the elements of A not in B. Adding the elements of B outside A to A gives A ∪ B. The intersection in statement 3 is empty, and B \\ A contains no element of A.'
    },
    {
      type: 'single',
      q: 'If a set A has 5 elements, how many elements does its power set P(A) have?',
      o: ['10', '16', '25', '32'],
      a: [3],
      e: 'The number of subsets of a set containing n elements is 2ⁿ. Therefore, n(P(A)) = 2⁵ = 32.'
    },
    {
      type: 'multiple',
      q: 'Which of the following statements about power sets are always true?',
      o: [
        'P(A ∩ B) = P(A) ∩ P(B)',
        'P(A ∪ B) = P(A) ∪ P(B)',
        'A ⊆ B implies P(A) ⊆ P(B)',
        'P(A) ⊆ P(B) implies A ⊆ B'
      ],
      a: [0, 2, 3],
      e: 'A set X belongs to P(A) ∩ P(B) exactly when X is a subset of both A and B, which means X ⊆ A ∩ B. Thus statement 1 is true. Statements 3 and 4 are equivalent. Statement 2 is not always true.'
    },
    {
      type: 'single',
      q: 'If n(A) = 25, n(B) = 20 and n(A ∪ B) = 35, then n(A ∩ B) is:',
      o: ['5', '10', '15', '20'],
      a: [1],
      e: 'Using n(A ∪ B) = n(A) + n(B) − n(A ∩ B), we get 35 = 25 + 20 − n(A ∩ B). Hence the intersection has 10 elements.'
    },
    {
      type: 'multiple',
      q: 'For three finite sets A, B and C, which statements are correct?',
      o: [
        'n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A ∩ B) − n(B ∩ C) − n(C ∩ A) + n(A ∩ B ∩ C)',
        'n(A ∪ B) = n(A) + n(B) if A ∩ B = ∅',
        'If A, B and C are pairwise disjoint, then n(A ∪ B ∪ C) = n(A) + n(B) + n(C)',
        'n(A ∩ B ∩ C) can never be zero'
      ],
      a: [0, 1, 2],
      e: 'Statement 1 is the inclusion-exclusion principle. Statement 2 follows from the two-set formula. Statement 3 follows because no elements are counted more than once. The triple intersection can certainly be empty.'
    },
    {
      type: 'single',
      q: 'If A and B are non-empty sets and A × B = B × A, then which statement must hold?',
      o: ['A ∩ B = ∅', 'A ⊆ B only', 'A = B', 'A ∪ B = A'],
      a: [2],
      e: 'Choose a ∈ A and b ∈ B. Since (a,b) ∈ A × B = B × A, we get a ∈ B and b ∈ A. Thus A ⊆ B and B ⊆ A, so A = B.'
    },
    {
      type: 'multiple',
      q: 'Let A be a set with 5 elements. Which statements are correct?',
      o: [
        'A has 32 subsets',
        'A has 10 subsets containing exactly 2 elements',
        'A has 16 proper subsets',
        'A has 5 singleton subsets'
      ],
      a: [0, 1, 3],
      e: 'The total number of subsets is 2⁵ = 32. Subsets with exactly 2 elements are counted by C(5,2) = 10. The number of proper subsets is 32 − 1 = 31, not 16. There are 5 singleton subsets.'
    },
    {
      type: 'single',
      q: 'If n(A) = 18, n(B) = 15 and n(A △ B) = 21, where △ denotes symmetric difference, find n(A ∩ B).',
      o: ['3', '6', '9', '12'],
      a: [1],
      e: 'We use n(A △ B) = n(A) + n(B) − 2n(A ∩ B). Thus 21 = 18 + 15 − 2n(A ∩ B), giving n(A ∩ B) = 6.'
    },
    {
      type: 'multiple',
      q: 'Which of the following are valid applications of De Morgan’s laws?',
      o: [
        '(A ∪ B)ᶜ = Aᶜ ∩ Bᶜ',
        '(A ∩ B)ᶜ = Aᶜ ∪ Bᶜ',
        '(A ∪ B)ᶜ = Aᶜ ∪ Bᶜ',
        '(A ∩ B)ᶜ = Aᶜ ∩ Bᶜ'
      ],
      a: [0, 1],
      e: 'De Morgan’s laws state that the complement of a union is the intersection of the complements, and the complement of an intersection is the union of the complements.'
    },
    {
      type: 'single',
      q: 'Let A = {1, 2, 3} and B = {2, 3, 4}. How many elements are there in P(A) ∩ P(B)?',
      o: ['2', '4', '8', '16'],
      a: [1],
      e: 'P(A) ∩ P(B) = P(A ∩ B). Since A ∩ B = {2, 3}, its power set contains 2² = 4 elements.'
    },
    {
      type: 'multiple',
      q: 'Let A, B and C be sets. Which of the following statements are always true?',
      o: [
        'A \\ (B ∪ C) = (A \\ B) ∩ (A \\ C)',
        'A \\ (B ∩ C) = (A \\ B) ∪ (A \\ C)',
        'A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)',
        'A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)'
      ],
      a: [0, 1, 2, 3],
      e: 'All four are standard set identities. The first two follow from De Morgan’s laws for relative complements, while the last two are the distributive laws of union and intersection.'
    },
    {
      type: 'single',
      q: 'If n(P(A)) = 64, then the number of elements in A is:',
      o: ['4', '5', '6', '8'],
      a: [2],
      e: 'Since n(P(A)) = 2ⁿ(A), we have 2ⁿ(A) = 64 = 2⁶. Therefore n(A) = 6.'
    },
    {
      type: 'multiple',
      q: 'Suppose A ⊆ B. Which of the following statements must be true?',
      o: [
        'A ∩ B = A',
        'A ∪ B = B',
        'B \\ A = ∅',
        'P(A) ⊆ P(B)'
      ],
      a: [0, 1, 3],
      e: 'The subset relation gives A ∩ B = A and A ∪ B = B. It also implies P(A) ⊆ P(B). Statement 3 is true only if A = B.'
    },
    {
      type: 'single',
      q: 'In a group of 100 students, 60 study Mathematics, 50 study Physics and 30 study both. How many study neither subject?',
      o: ['10', '15', '20', '30'],
      a: [2],
      e: 'The number studying at least one subject is 60 + 50 − 30 = 80. Hence the number studying neither is 100 − 80 = 20.'
    }
  ];

  const [current, setCurrent] = React.useState(0);
  const [selected, setSelected] = React.useState([]);
  const [submitted, setSubmitted] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [finished, setFinished] = React.useState(false);

  const question = questions[current];

  const isCorrect = () =>
    selected.length === question.a.length &&
    selected.every(x => question.a.includes(x));

  const toggleOption = (index) => {
    if (submitted) return;

    if (question.type === 'single') {
      setSelected([index]);
    } else {
      setSelected(prev =>
        prev.includes(index)
          ? prev.filter(x => x !== index)
          : [...prev, index]
      );
    }
  };

  const submitAnswer = () => {
    if (selected.length === 0) return;

    setSubmitted(true);
    if (isCorrect()) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (current === questions.length - 1) {
      setFinished(true);
    } else {
      setCurrent(prev => prev + 1);
      setSelected([]);
      setSubmitted(false);
    }
  };

  const restart = () => {
    setCurrent(0);
    setSelected([]);
    setSubmitted(false);
    setScore(0);
    setFinished(false);
  };

  const progress = finished
    ? 100
    : ((current + (submitted ? 1 : 0)) / questions.length) * 100;

  if (finished) {
    const percentage = (score / questions.length) * 100;

    return (
      <div>
        <h2 style={{
  fontSize: '26px',
  fontWeight: '700',
  color: '#1e293b',
  marginBottom: '20px'
}}>
  JEE Advanced – Test Result
</h2>
        <h3 style={{ color: '#2563eb', fontSize: '30px' }}>
          {score} / {questions.length}
        </h3>
        <p><b>Percentage:</b> {percentage.toFixed(2)}%</p>
        <p>
          {percentage >= 80
            ? 'Excellent performance! Keep practising advanced problems.'
            : percentage >= 50
              ? 'Good effort! Review the explanations and practise again.'
              : 'Keep working on the concepts. Revisit the theory and try again.'}
        </p>
        <button onClick={restart} style={buttonStyle}>
          Restart Test
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2 style={{
  fontSize: '26px',
  fontWeight: '700',
  color: '#1e293b',
  marginBottom: '20px'
}}>
  JEE Advanced Practice
</h2>

      <div style={{ marginBottom: '18px' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '7px'
        }}>
          <b>Question {current + 1} of {questions.length}</b>
          <b>Score: {score}</b>
        </div>

        <div style={{
          height: '9px',
          background: '#e2e8f0',
          borderRadius: '10px',
          overflow: 'hidden'
        }}>
          <div style={{
            height: '100%',
            width: `${progress}%`,
            background: '#2563eb',
            transition: 'width 0.3s'
          }} />
        </div>
      </div>

      <p style={{
        color: '#64748b',
        fontWeight: '600',
        fontSize: '14px'
      }}>
        {question.type === 'multiple'
          ? 'MULTIPLE CORRECT – Select all correct options.'
          : 'SINGLE CORRECT – Select one option.'}
      </p>

      <h3 style={{ lineHeight: '1.7', color: '#1e293b' }}>
        {question.q}
      </h3>

      <div style={{ display: 'grid', gap: '12px', marginTop: '20px' }}>
        {question.o.map((option, index) => {
          const isSelected = selected.includes(index);
          const isAnswer = question.a.includes(index);

          let background = isSelected ? '#dbeafe' : '#ffffff';
          let border = isSelected ? '2px solid #2563eb' : '1px solid #cbd5e1';

          if (submitted && isAnswer) {
            background = '#dcfce7';
            border = '2px solid #16a34a';
          } else if (submitted && isSelected && !isAnswer) {
            background = '#fee2e2';
            border = '2px solid #dc2626';
          }

          return (
            <button
              key={index}
              onClick={() => toggleOption(index)}
              disabled={submitted}
              style={{
                padding: '14px',
                textAlign: 'left',
                border,
                borderRadius: '10px',
                background,
                color: '#1e293b',
                cursor: submitted ? 'default' : 'pointer',
                fontSize: '15px',
                lineHeight: '1.6'
              }}
            >
              <b>{String.fromCharCode(65 + index)}.</b> {option}
              {submitted && isAnswer ? ' ✓' : ''}
              {submitted && isSelected && !isAnswer ? ' ✗' : ''}
            </button>
          );
        })}
      </div>

      {submitted && (
        <div style={{
          marginTop: '20px',
          padding: '16px',
          borderRadius: '10px',
          background: isCorrect() ? '#dcfce7' : '#fee2e2',
          color: '#1e293b'
        }}>
          <h3>{isCorrect() ? 'Correct Answer!' : 'Incorrect Answer'}</h3>
          <p><b>Correct option(s):</b> {question.a
            .map(x => String.fromCharCode(65 + x)).join(', ')}</p>
          <p><b>Explanation:</b> {question.e}</p>
        </div>
      )}

      <div style={{ marginTop: '22px' }}>
        {!submitted ? (
          <button
            onClick={submitAnswer}
            disabled={selected.length === 0}
            style={{
              ...buttonStyle,
              opacity: selected.length === 0 ? 0.5 : 1,
              cursor: selected.length === 0 ? 'not-allowed' : 'pointer'
            }}
          >
            Check Answer
          </button>
        ) : (
          <button onClick={nextQuestion} style={buttonStyle}>
            {current === questions.length - 1
              ? 'View Final Result'
              : 'Next Question →'}
          </button>
        )}
      </div>
    </div>
  );
}

function SetsChapterTest() {
  const questions = [
    {
      type: 'single',
      q: 'If a set contains 4 distinct elements, how many proper subsets does it have?',
      o: ['8', '15', '16', '12'],
      a: [1],
      e: 'Total subsets = 2⁴ = 16. Proper subsets = 16 − 1 = 15.'
    },
    {
      type: 'single',
      q: 'If A = {1, 2, 3, 4} and B = {3, 4, 5, 6}, then A ∩ B is:',
      o: ['{1, 2}', '{3, 4}', '{1, 2, 3, 4, 5, 6}', '∅'],
      a: [1],
      e: 'The intersection contains the elements common to both sets. Hence A ∩ B = {3, 4}.'
    },
    {
      type: 'multiple',
      q: 'Which of the following statements are always true?',
      o: [
        'A ∩ B ⊆ A',
        'A ⊆ A ∪ B',
        'A ∩ B = B ∩ A',
        'A ∪ B = A ∩ B'
      ],
      a: [0, 1, 2],
      e: 'Intersection is a subset of each set, every element of A belongs to A ∪ B, and intersection is commutative. Statement 4 is not always true.'
    },
    {
      type: 'single',
      q: 'If n(A) = 20, n(B) = 15 and n(A ∩ B) = 5, find n(A ∪ B).',
      o: ['25', '30', '35', '40'],
      a: [1],
      e: 'n(A ∪ B) = n(A) + n(B) − n(A ∩ B) = 20 + 15 − 5 = 30.'
    },
    {
      type: 'single',
      q: 'The number of subsets of a set having 6 elements is:',
      o: ['12', '32', '64', '36'],
      a: [2],
      e: 'The number of subsets of a set with n elements is 2ⁿ. Therefore, 2⁶ = 64.'
    },
    {
      type: 'multiple',
      q: 'Which of the following are correct applications of De Morgan’s laws?',
      o: [
        '(A ∪ B)ᶜ = Aᶜ ∩ Bᶜ',
        '(A ∩ B)ᶜ = Aᶜ ∪ Bᶜ',
        '(A ∪ B)ᶜ = Aᶜ ∪ Bᶜ',
        '(A ∩ B)ᶜ = Aᶜ ∩ Bᶜ'
      ],
      a: [0, 1],
      e: 'De Morgan’s laws interchange union and intersection when taking complements.'
    },
    {
      type: 'single',
      q: 'If A ⊆ B, then which of the following is necessarily true?',
      o: ['A ∪ B = A', 'A ∩ B = B', 'A ∪ B = B', 'A ∩ B = ∅'],
      a: [2],
      e: 'If every element of A belongs to B, then their union is simply B.'
    },
    {
      type: 'single',
      q: 'If n(P(A)) = 128, then n(A) is:',
      o: ['6', '7', '8', '9'],
      a: [1],
      e: '2ⁿ = 128 = 2⁷. Hence n(A) = 7.'
    },
    {
      type: 'multiple',
      q: 'Let A and B be disjoint sets. Which statements are true?',
      o: [
        'A ∩ B = ∅',
        'n(A ∪ B) = n(A) + n(B), if both are finite',
        'A ⊆ B',
        'A − B = A'
      ],
      a: [0, 1, 3],
      e: 'Disjoint sets have an empty intersection. Their union has the sum of their cardinalities when finite. Also, A − B = A. Disjointness does not imply A ⊆ B.'
    },
    {
      type: 'single',
      q: 'If n(A) = 30, n(B) = 25 and n(A ∪ B) = 40, then n(A ∩ B) is:',
      o: ['10', '15', '20', '5'],
      a: [1],
      e: 'n(A ∩ B) = 30 + 25 − 40 = 15. Wait: the correct value is 15, so option B is correct.',
    },
    {
      type: 'single',
      q: 'If A has 5 elements, how many subsets of A contain exactly 2 elements?',
      o: ['5', '10', '15', '20'],
      a: [1],
      e: 'The number of subsets containing exactly 2 elements is C(5,2) = 5!/(2!3!) = 10.'
    },
    {
      type: 'multiple',
      q: 'Which of the following statements about power sets are correct?',
      o: [
        'P(A ∩ B) = P(A) ∩ P(B)',
        'A ⊆ B implies P(A) ⊆ P(B)',
        'P(A ∪ B) = P(A) ∪ P(B) always',
        'P(∅) = {∅}'
      ],
      a: [0, 1, 3],
      e: 'The subsets common to A and B are exactly the subsets of A ∩ B. Power sets preserve inclusion, and the empty set has exactly one subset: itself.'
    },
    {
      type: 'single',
      q: 'In a class of 60 students, 35 like Mathematics, 30 like Physics and 15 like both. How many like neither?',
      o: ['5', '10', '15', '20'],
      a: [1],
      e: 'n(M ∪ P) = 35 + 30 − 15 = 50. Therefore, neither = 60 − 50 = 10.'
    },
    {
      type: 'single',
      q: 'If A × B = ∅, then:',
      o: [
        'A and B must both be empty',
        'At least one of A and B is empty',
        'A = B',
        'Both A and B are non-empty'
      ],
      a: [1],
      e: 'A Cartesian product is empty if and only if at least one of its factor sets is empty.'
    },
    {
      type: 'multiple',
      q: 'Which of the following set identities are correct?',
      o: [
        'A ∪ (A ∩ B) = A',
        'A ∩ (A ∪ B) = A',
        'A ∪ ∅ = A',
        'A ∩ U = A'
      ],
      a: [0, 1, 2, 3],
      e: 'All four are standard absorption and identity laws of sets, where U denotes the universal set.'
    },
    {
      type: 'single',
      q: 'If n(A) = 18, n(B) = 15 and n(A △ B) = 21, find n(A ∩ B).',
      o: ['3', '6', '9', '12'],
      a: [1],
      e: 'n(A △ B) = n(A) + n(B) − 2n(A ∩ B). Thus 21 = 33 − 2x, so x = 6.'
    },
    {
      type: 'multiple',
      q: 'If A ⊆ B, which statements must hold?',
      o: [
        'A ∩ B = A',
        'A ∪ B = B',
        'P(A) ⊆ P(B)',
        'B − A = ∅'
      ],
      a: [0, 1, 2],
      e: 'The first three follow directly from A ⊆ B. The fourth is true only when A = B.'
    },
    {
      type: 'single',
      q: 'A set has 8 elements. The number of its subsets containing at least one element is:',
      o: ['128', '255', '256', '254'],
      a: [1],
      e: 'Total subsets = 2⁸ = 256. Excluding the empty subset gives 256 − 1 = 255.'
    },
    {
      type: 'multiple',
      q: 'For three finite sets A, B and C, which statements are correct?',
      o: [
        'n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A ∩ B) − n(B ∩ C) − n(C ∩ A) + n(A ∩ B ∩ C)',
        'If A, B and C are pairwise disjoint, their union has cardinality equal to the sum of their cardinalities',
        'n(A ∩ B ∩ C) ≤ n(A)',
        'n(A ∪ B ∪ C) = n(A) + n(B) + n(C) always'
      ],
      a: [0, 1, 2],
      e: 'Statement 1 is the three-set inclusion-exclusion formula. Statement 2 follows from pairwise disjointness. The triple intersection is a subset of A, so statement 3 is true. Statement 4 is false in general.'
    },
    {
      type: 'single',
      q: 'Let A = {1, 2, 3} and B = {2, 3, 4}. Find the number of elements in P(A) ∩ P(B).',
      o: ['2', '4', '8', '16'],
      a: [1],
      e: 'P(A) ∩ P(B) = P(A ∩ B). Since A ∩ B = {2, 3}, the required number is 2² = 4.'
    }
  ];

  const [current, setCurrent] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const [timeLeft, setTimeLeft] = React.useState(1800);
  const [finished, setFinished] = React.useState(false);

  const total = questions.length;
  const question = questions[current];
  const selected = answers[current] || [];

  const calculateScore = () => {
    return questions.reduce((totalScore, q, index) => {
      const chosen = answers[index] || [];
      const correct =
        chosen.length === q.a.length &&
        q.a.every(x => chosen.includes(x));

      return totalScore + (correct ? 1 : 0);
    }, 0);
  };

  React.useEffect(() => {
    if (finished) return;

    if (timeLeft <= 0) {
      setFinished(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, finished]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  const selectOption = (index) => {
    setAnswers(prev => {
      const old = prev[current] || [];

      let updated;

      if (question.type === 'single') {
        updated = [index];
      } else {
        updated = old.includes(index)
          ? old.filter(x => x !== index)
          : [...old, index];
      }

      return { ...prev, [current]: updated };
    });
  };

  const finishTest = () => {
    setFinished(true);
  };

  const restartTest = () => {
    setCurrent(0);
    setAnswers({});
    setTimeLeft(1800);
    setFinished(false);
  };

  const score = calculateScore();
  const percentage = (score / total) * 100;

  const buttonStyle = {
    padding: '11px 20px',
    border: 'none',
    borderRadius: '8px',
    background: '#2458a6',
    color: 'white',
    fontWeight: '600',
    cursor: 'pointer'
  };

  const outlineButton = {
    padding: '10px 16px',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    background: 'white',
    color: '#1e293b',
    cursor: 'pointer',
    fontWeight: '600'
  };

  const headingStyle = {
    fontSize: '25px',
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: '15px'
  };

  if (finished) {
    return (
      <div>
        <h2 style={headingStyle}>Sets – Chapter Test Result</h2>

        <div style={{
          padding: '22px',
          background: '#eff6ff',
          borderRadius: '12px',
          marginBottom: '20px'
        }}>
          <h2 style={{
            fontSize: '36px',
            color: '#2458a6',
            margin: '0 0 10px'
          }}>
            {score} / {total}
          </h2>

          <h3 style={{ color: '#1e293b' }}>
            Percentage: {percentage.toFixed(2)}%
          </h3>

          <p style={{ color: '#334155' }}>
            {percentage >= 85
              ? 'Outstanding! You have an excellent understanding of Sets.'
              : percentage >= 70
                ? 'Very good! Keep practising to improve further.'
                : percentage >= 50
                  ? 'Good attempt. Review the incorrect answers and strengthen your concepts.'
                  : 'Keep practising. Revisit the theory and solved examples before trying again.'}
          </p>
        </div>

        <h3 style={{ color: '#1e293b' }}>Answer Review</h3>

        <div style={{ display: 'grid', gap: '14px' }}>
          {questions.map((q, index) => {
            const chosen = answers[index] || [];
            const correct =
              chosen.length === q.a.length &&
              q.a.every(x => chosen.includes(x));

            return (
              <div key={index} style={{
                padding: '15px',
                border: '1px solid #e2e8f0',
                borderRadius: '10px',
                background: '#ffffff',
                color: '#1e293b'
              }}>
                <b>
                  Question {index + 1}
                  {' – '}
                  <span style={{
                    color: correct ? '#16834b' : '#dc2626'
                  }}>
                    {correct ? 'Correct' : 'Incorrect / Not Attempted'}
                  </span>
                </b>

                <p>{q.q}</p>

                <p>
                  <b>Your answer:</b>{' '}
                  {chosen.length
                    ? chosen.map(x => String.fromCharCode(65 + x)).join(', ')
                    : 'Not attempted'}
                </p>

                <p>
                  <b>Correct answer:</b>{' '}
                  {q.a.map(x => String.fromCharCode(65 + x)).join(', ')}
                </p>

                <p>
                  <b>Explanation:</b> {q.e}
                </p>
              </div>
            );
          })}
        </div>

        <button
          onClick={restartTest}
          style={{ ...buttonStyle, marginTop: '22px' }}
        >
          Restart Chapter Test
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2 style={headingStyle}>Sets – Chapter Test</h2>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '10px',
        padding: '14px',
        background: '#eff6ff',
        borderRadius: '10px',
        marginBottom: '18px',
        color: '#1e293b'
      }}>
        <b>Question {current + 1} / {total}</b>

        <b style={{
          color: timeLeft <= 300 ? '#dc2626' : '#2458a6'
        }}>
          <span>Time left: </span>
          {formatTime(timeLeft)}
        </b>
      </div>

      <div style={{
        height: '8px',
        background: '#e2e8f0',
        borderRadius: '10px',
        overflow: 'hidden',
        marginBottom: '20px'
      }}>
        <div style={{
          height: '100%',
          width: `${(Object.keys(answers).length / total) * 100}%`,
          background: '#2563eb',
          transition: 'width 0.2s'
        }} />
      </div>

      <p style={{
        color: '#64748b',
        fontWeight: '600',
        fontSize: '14px'
      }}>
        {question.type === 'multiple'
          ? 'MULTIPLE CORRECT – Select all correct options.'
          : 'SINGLE CORRECT – Select one option.'}
      </p>

      <h3 style={{
        color: '#1e293b',
        lineHeight: '1.7',
        marginBottom: '20px'
      }}>
        Q{current + 1}. {question.q}
      </h3>

      <div style={{ display: 'grid', gap: '12px' }}>
        {question.o.map((option, index) => {
          const isSelected = selected.includes(index);

          return (
            <button
              key={index}
              onClick={() => selectOption(index)}
              style={{
                padding: '14px',
                textAlign: 'left',
                border: isSelected
                  ? '2px solid #2563eb'
                  : '1px solid #cbd5e1',
                borderRadius: '9px',
                background: isSelected ? '#dbeafe' : '#ffffff',
                color: '#1e293b',
                cursor: 'pointer',
                fontSize: '15px',
                lineHeight: '1.6'
              }}
            >
              <b>{String.fromCharCode(65 + index)}.</b> {option}
              {isSelected ? ' ✓' : ''}
            </button>
          );
        })}
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '10px',
        marginTop: '24px'
      }}>
        <button
          onClick={() => setCurrent(prev => Math.max(0, prev - 1))}
          disabled={current === 0}
          style={{
            ...outlineButton,
            opacity: current === 0 ? 0.4 : 1
          }}
        >
          ← Previous
        </button>

        {current < total - 1 ? (
          <button
            onClick={() => setCurrent(prev => prev + 1)}
            style={buttonStyle}
          >
            Next →
          </button>
        ) : (
          <button
            onClick={finishTest}
            style={{
              ...buttonStyle,
              background: '#16834b'
            }}
          >
            Submit Test
          </button>
        )}
      </div>

      <div style={{
        marginTop: '24px',
        padding: '15px',
        background: '#f8fafc',
        borderRadius: '10px'
      }}>
        <b style={{ color: '#1e293b' }}>Question Navigator</b>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
          gap: '9px',
          marginTop: '12px'
        }}>
          {questions.map((q, index) => {
            const attempted = (answers[index] || []).length > 0;

            return (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                style={{
                  padding: '10px 4px',
                  borderRadius: '7px',
                  border: current === index
                    ? '2px solid #2563eb'
                    : '1px solid #cbd5e1',
                  background: attempted ? '#dcfce7' : '#ffffff',
                  color: '#1e293b',
                  fontWeight: '700',
                  cursor: 'pointer'
                }}
              >
                {index + 1}
              </button>
            );
          })}
        </div>

        <p style={{
          color: '#64748b',
          fontSize: '13px',
          marginBottom: 0
        }}>
          Green: Answered | White: Not answered | Blue border: Current question
        </p>
      </div>

      <button
        onClick={finishTest}
        style={{
          ...buttonStyle,
          background: '#dc2626',
          marginTop: '20px'
        }}
      >
        Submit Test Now
      </button>
    </div>
  );
}

export default SetsChapter;
