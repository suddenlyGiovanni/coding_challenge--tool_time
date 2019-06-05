import * as React from 'react'
import { RouteChildrenProps } from 'react-router'
import { connect } from 'react-redux'
import { RootState } from 'typesafe-actions'

import { pollsSelectors, pollsActions } from 'features/polls'
import { Question } from 'components/question/Question'

function mapStateToProps(state: RootState) {
  return {
    questions: pollsSelectors.getQuestions(state),
  }
}

const mapDispatchToProps = {
  fetchQuestions: pollsActions.fetchQuestions,
}

type ReduxProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

type Props = RouteChildrenProps & ReduxProps

export class QuestionsView extends React.Component<Props> {
  public componentDidMount() {
    this.props.fetchQuestions()
  }

  public handleSelection = (url: string): void => this.props.history.push(url)
  public render() {
    const { questions } = this.props

    // if (!questions) return null // TODO: provide a better fallback

    return (
      <div>
        <span>Questions</span>
        <div>
          {questions &&
            questions.map(({ choices, published_at, question, url }) => {
              return (
                <Question
                  key={url}
                  question={question}
                  numberOfChoices={choices.length}
                  publishedAt={published_at}
                  onClick={() => this.handleSelection(url)}
                />
              )
            })}
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsView)
