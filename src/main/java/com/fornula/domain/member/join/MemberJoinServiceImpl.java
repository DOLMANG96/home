package com.fornula.domain.member.join;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fornula.domain.member.dto.Member;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MemberJoinServiceImpl implements MemberJoinService{
	
	
	private MemberJoinRepository memberJoinRepository;

	@Override
	public void join(MemberDTO memberDTO) {
		
		memberJoinRepository.join(memberDTO);
	}
	
}
