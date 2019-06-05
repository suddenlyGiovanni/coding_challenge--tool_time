import * as React from 'react'
import { RouteChildrenProps } from 'react-router'
import { connect } from 'react-redux'
import { RootState } from 'typesafe-actions'

import { Choice } from 'components/choice/Choice'
import { pollsSelectors, pollsActions } from 'features/polls'

function mapStateToProps(
  state: RootState,
  ownProps: RouteChildrenProps<RouteParams>
) {
  const url = ownProps.location.pathname
  return {
    question: pollsSelectors.getQuestion({ state, questionId: url }),
  }
}

const mapDispatchToProps = {
  vote: pollsActions.voteChoice,
}

type ReduxProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

interface RouteParams {
  questionId: string
}

type Props = RouteChildrenProps<RouteParams> & ReduxProps

interface State {
  selectedEl: null | string
  alreadyVoted: boolean
}

export class QuestionsDetailView extends React.Component<Props, State> {
  public state: State = { selectedEl: null, alreadyVoted: false }

  public handleSave = (): void => {
    if (!this.state.selectedEl) return
    const choiceUrl = this.state.selectedEl
    this.setState({ selectedEl: null, alreadyVoted: true }, () => {
      this.props.vote({ choiceUrl })
      this.props.history.push('/')
    })
  }

  public handleSelect = (url: string): void => {
    this.setState({ selectedEl: url })
  }

  public render() {
    const { question } = this.props

    if (!question) return null

    return (
      <div>
        <div>Question Details</div>
        {question &&
          question.choices.map(({ url, choice, votes, percentage }) => {
            return (
              <Choice
                key={url}
                url={url}
                choice={choice}
                votes={votes}
                percentage={percentage}
                onClick={this.handleSelect}
              />
            )
          })}
        <button
          onClick={this.handleSave}
          disabled={!this.state.selectedEl || this.state.alreadyVoted}
        >
          Save Vote
        </button>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsDetailView)
